/**
 * 树的节点
 */
export class TreeNode<T> {
    public value: T
    // 父节点
    public parentNode: TreeNode<T> | undefined
    // 子节点
    public childNodes: TreeNode<T>[]
    public ID: string | undefined = undefined

    constructor(value: T) {
        this.value = value
        this.parentNode = undefined
        this.childNodes = []
    }

    /**
     * 添加节点
     * @param node 
     */
    public appendChild(node: TreeNode<T>): void {
        this.childNodes.push(node)

        node.parentNode = this
    }


    /**
     * 删除节点
     * @param node 
     */
    public removeChild(node: TreeNode<T>): void {
        for (let i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i] === node) {
                this.childNodes.splice(i, 1)
                node.parentNode = undefined
                return
            }
        }
    }
}