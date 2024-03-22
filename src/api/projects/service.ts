import { BaseServiceClass } from "../../services/base";
import { ProjectInstance, ProjectStatic } from "../../db/models/Project";

export class ProjectServiceClass extends BaseServiceClass<ProjectInstance> {
  constructor(model: ProjectStatic) {
    super(model);
  }
}
