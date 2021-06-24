import { TreeNode } from "./TreeNode";

/**
 * 树
 */
class Tree<T> {
    // 根节点
    private root: TreeNode<T | undefined>

    constructor() {
        this.root = new TreeNode<T | undefined>(undefined)
    }

    /**
     * 获得根节点
     * @returns 
     */
    public getRoot(): TreeNode<T | undefined> {
        return this.root
    }

    /**
     * 通过 ID 查找节点
     * @param ID 
     * @returns 
     */
    public getNodeById(ID: string): TreeNode<T | undefined> | undefined {
        const find = (node: TreeNode<T | undefined> | undefined): TreeNode<T | undefined> | undefined => {
            if (node.ID === ID) return node
            else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    const res = find(node.childNodes[i])
                    if (res) return res
                }
            }

            return undefined
        }

        return find(this.root)
    }
}