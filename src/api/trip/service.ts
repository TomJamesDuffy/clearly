import { BaseServiceClass } from "../../services/base";
import { TripInstance, TripStatic } from "../../db/models/Trip";
import { ProjectServiceClass } from "../projects/service";
import { VehicleServiceClass } from "../vehicle/service";

export class TripServiceClass extends BaseServiceClass<TripInstance> {
  projectService: ProjectServiceClass;
  vehicleSevice: VehicleServiceClass;

  constructor(
    model: TripStatic,
    projectService: ProjectServiceClass,
    vehicleService: VehicleServiceClass
  ) {
    super(model);

    this.projectService = projectService;
    this.vehicleSevice = vehicleService;
  }

  async getTripsByProject() {
    try {
      const trips = await this.model.findAll();

      const initialAcc: { [projectId: string]: TripInstance[] } = {};

      const tripsByProjectId = trips.reduce((acc, trip) => {
        if (!acc[trip.projectId]) {
          acc[trip.projectId] = [];
        }
        acc[trip.projectId].push(trip);
        return acc;
      }, initialAcc);

      const tripsGroupedByProject = await Promise.all(
        Object.keys(tripsByProjectId).map(async (projectId) => {
          const project = await this.projectService.find(projectId);

          if (!project) {
            throw new Error(`Project not found for ID: ${projectId}`);
          }
          return {
            project,
            trips: tripsByProjectId[projectId],
          };
        })
      );

      return tripsGroupedByProject;
    } catch (error) {
      throw new Error(`Error fetching trips grouped by project.`);
    }
  }
}
