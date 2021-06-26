type BSTNode<T, U> = {
    key: T,
    value: U,
    left: BSTNode<T, U>,
    right: BSTNode<T, U>,
}

// 二叉查找树
class BinarySearchTree<T, U> {
    private root: BSTNode<T, U> | undefined = undefined

    /**
     * 插入节点
     * @param key 
     * @param value 
     */
    public insert(key: T, value: U): void {
        // 插入节点的递归实现, 类似二分查找
        const insertNode = (node: BSTNode<T, U>): void => {
            if (node.key === key) { // 节点 key 须唯一
                throw new Error(`duplicated key: ${key}`)
            } else if (node.key < key) { // 往右
                if (node.right == undefined) { // 该节点右边没有节点, 成为插入的位置
                    node.right = { key, value, left: undefined, right: undefined }
                } else { // 继续找
                    insertNode(node.right)
                }
            } else { //往左
                if (node.left == undefined) { // 该节点左边没有节点, 成为插入的位置
                    node.left = { key, value, left: undefined, right: undefined }
                } else { // 继续找
                    insertNode(node.left)
                }
            }
        }


        if (this.root) { // 根节点存在, 递归找到合适位置进行插入
            insertNode(this.root)
        } else { // 根节点不存在, 创建根节点
            this.root = { key, value, left: undefined, right: undefined }
        }
    }

    /**
     * 搜索节点
     * @param key 
     * @returns 
     */
    public search(key: T): U | undefined {
        const searchNode = (node: BSTNode<T, U>): U | undefined => {
            if (node.key === key) return node.value
            else if (node.key < key) { // 往右
                if (node.right == undefined) { // 节点右边没有下一个节点, 找不到
                    return undefined
                } else {
                    return searchNode(node.right)
                }
            } else { // 往左
                if (node.left == undefined) { // 节点左边没有下一个节点, 找不到
                    return undefined
                } else {
                    return searchNode(node.left)
                }
            }
        }

        if (this.root == undefined) {
            return undefined
        } else {
            return searchNode(this.root)
        }
    }
}