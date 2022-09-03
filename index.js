class moreBlocks {
    constructor() {
    }

    getInfo() {
        return {
            id: "moreBlocks",
            name: "moreBlocks",
            blocks: [
                {
                    opcode: "colorsEqual",
                    blockType: "hat",
                    text: "color [a] = [b]",
                    arguments: {
                        a: {
                            type: "color"
                        },
                        b: {
                            type: "color"
                        }
                    }
                }
            ]
        }
    }
    whenMouseDown (args) {
        return (args.a == args.b)
    }
}
