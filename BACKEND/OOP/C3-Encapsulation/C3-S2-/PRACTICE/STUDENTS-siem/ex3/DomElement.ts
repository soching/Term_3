export class DomElement {
    private parent?: DomElement;
    private children: DomElement[];

    constructor(private name: string) {
        this.name = name;
        this.children = [];
    }

    getName(): string {
        return this.name;
    }

    isRoot(): boolean {
        return this.parent === undefined ;
    }

    addChild(child: DomElement): void {
        child.setParent(this);
        this.children.push(child);
    }

    setParent(parent: DomElement): void {
        this.parent = parent;
    }

}
