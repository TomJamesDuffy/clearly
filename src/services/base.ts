import { Model, ModelStatic, WhereOptions } from "sequelize";
import DataLoader from "dataloader";

interface BaseModel extends Model {
  id?: string;
}

export abstract class BaseServiceClass<TModel extends BaseModel> {
  protected model: ModelStatic<TModel>;
  private loader: DataLoader<string, TModel>;

  constructor(model: ModelStatic<TModel>) {
    this.model = model;
    this.loader = new DataLoader<string, TModel>(
      async (ids: readonly string[]) => {
        const records = await this.model.findAll({
          where: {
            id: ids,
          } as WhereOptions,
        });

        const recordsMap = new Map(
          records.map((record) => [String(record.id), record])
        );

        return ids.map((id) => {
          const record = recordsMap.get(id);
          if (!record) {
            throw new Error(`Record not found for ID: ${id}`);
          }
          return record;
        });
      }
    );
  }

  async find(id: string): Promise<TModel | null> {
    return this.loader.load(id);
  }

  async findAll(): Promise<TModel[]> {
    return this.model.findAll();
  }

  async create(
    data: Omit<
      TModel["_creationAttributes"],
      "id" | "createdDate" | "updatedDate"
    >
  ): Promise<TModel> {
    const record = await this.model.create(
      data as TModel["_creationAttributes"]
    );
    return record;
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.model.destroy({
      where: { id } as WhereOptions,
    });
    return deleted > 0;
  }
}
