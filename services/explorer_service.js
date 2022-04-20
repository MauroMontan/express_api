import Explorer from "../models/explorer_model.js";

class ExplorerService {
  static create(id, name) {
    return new Explorer(id, name);
  }

  static get explorerList() {
    const explorer1 = this.create(1, "Mauro");
    const explorer2 = this.create(2, "Miguel");
    const explorers = [explorer1, explorer2];
    return explorers;
  }

  static getExplorerById(id) {
    const explorers = this.explorerList;

    return explorers.find((explorer) => explorer.id === id);
  }

  static createExplorer(payload) {
    const explorer = this.create(payload.id, payload.name);

    return { user: explorer, msg: "user created" };
  }
}

export default ExplorerService;
