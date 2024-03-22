import { CargoServiceClass } from "../../cargo/service";
import { TripServiceClass } from "../../trip/service";
import { Cargo, Trip } from "../../../../__generated__/graphql-types";
import { TripCargoInstance } from "../../../db/models/TripCargo";
import { ModelStatic } from "sequelize";

export const findByFieldId = async (
  model: ModelStatic<TripCargoInstance>,
  fieldName: keyof TripCargoInstance,
  desiredFieldName: keyof TripCargoInstance,
  fieldId: string,
  service: CargoServiceClass | TripServiceClass
): Promise<Cargo[] | Trip[]> => {
  try {
    const tripCargos = await model.findAll({
      where: { [fieldName]: fieldId },
    });

    const items = await Promise.all(
      tripCargos.map((tripCargo) => {
        const id = tripCargo[desiredFieldName as keyof TripCargoInstance];
        return service.find(id as string);
      })
    );

    return items.filter((item) => item !== null) as Cargo[] | Trip[];
  } catch (error) {
    console.error(`Error fetching items for ${fieldName} ID:`, fieldId, error);
    throw error;
  }
};
