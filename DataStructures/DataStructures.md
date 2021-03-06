# 数据结构

世上没有完美的数据结构，只有合适的数据结构。

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [基础](#基础)
  - [几种复杂度的函数形态](#几种复杂度的函数形态)
  - [问题分类](#问题分类)
    - [P 问题](#p-问题)
    - [NP 问题](#np-问题)
  - [分治](#分治)
  - [递归](#递归)
  - [语言基础](#语言基础)
    - [ADT](#adt)
    - [指针](#指针)
    - [ts js 中的数据结构与算法](#ts-js-中的数据结构与算法)
- [表](#表)
  - [线性表](#线性表)
  - [链表](#链表)
    - [常见链表](#常见链表)
- [队列](#队列)
- [堆栈](#堆栈)
- [树](#树)
  - [二叉树](#二叉树)
  - [树的遍历](#树的遍历)
    - [二叉排序](#二叉排序)
- [比较](#比较)

<!-- /code_chunk_output -->

---

## 基础

### 几种复杂度的函数形态

- 常数: `O(1)`
- 线性: `O(n)`
- 对数: `O(log(n))`
- 指数: `O(n^2)`
- 级数: `O(2^n)`

### 问题分类

#### P 问题

polynomial

在确定性计算设备上，可在多项式时间内求解的问题

- 多项式时间: 常数、线性、对数、指数
- 非多项式时间: 级数或更高

#### NP 问题

non deterministic polynomial

在确定性计算设备上，以多项式时间来**验证答案准确性**的问题

在非确定性计算设备上 (比如: 量子计算机)，可在多项式时间内求解的问题

### 分治

分而治之，是各类算法的基础思想——将问题不断划分为更小的单位，直到问题规模可被求解，然后再将问题的结果合并。

- [二分查找](./BinarySearch.ts) —— O(log(n))

### 递归

有一部分语言，函数是可重入的——函数没有执行完之前，可以再次被调用，这种行为被称为"递归(Recursive)"

- [斐波那契数列](./Fibonacci.ts)
- [二分查找 - 递归](./BinarySearchRecursive.ts)

### 语言基础

#### ADT

抽象数据类型 (Abstract Data Type)，定义通用性的操作，具体存储哪种数据类型并不重要。

JS/TS 中主要体现为**泛型**。

#### 指针

计算机中，数据分为两种：

- 基本类型：变量直接存储数据本身，例如数字
- 引用类型：变量不存储数据本身，而是存储数据所在的内存地址——这种变量称为**指针变量**，简称**指针**

高级语言(Javascript、Java、Python 等)无法直接访问指针类型，但我们仍需具备这种思想。

#### ts js 中的数据结构与算法

高级语言中，大量的数据结构是现成的，如 js 中：

- Array 很好的实现了 sort、stack、queue 的操作
- Object / json 很好的实现了 Map 的操作
- Set

虽然高级语言无法访问底层细节，但我们仍需要具备数据结构的思想，提升代码质量。

---

## 表

类似于每种语言中的数组。

### 线性表

一块连续的内存空间。

- 空间连续 —— 寻址操作 (访问下标) 非常快 —— 访问线性表中的任何一个数据都是 **O(1)**
- 总长度固定 —— 长度超出得重新分配空间 —— 复制数据、释放原有空间

> JS 的数组是线性表。

- [线性表 - 无序表](./List.ts)
- [线性表 - 有序表](./OrderedList.ts)

### 链表

- 空间不连续 —— 访问数据 **O(n)**
- 长度不固定 —— 新数据分配一小块空间即可
- [普通链表](./LinkedList.ts)
- [头尾链表 + 双链表](./HTLinkedList.ts)

#### 常见链表

- 普通链表
- 头尾链表
- 双链表
- 循环链表 (衔尾)
- 缓存链表

---

## 队列

先进先出、后进后出

- [线性表-队列](./ListQueue.ts)
- [链表-队列](./LinkedListQueue.ts)

---

## 堆栈

先进后出、后进先出

- [线性表-堆栈](./ListStack.ts)
- [链表-堆栈](./LinkedListStack.ts)

---

## 树

- [广义树](./Tree.ts)

### 二叉树

- 二叉树: 每个节点最多有两个子节点
- [二叉查找树](./BinarySearchTree.ts): 二叉树, 左子树中所有的节点都比根节点小, 右子树所有的节点都比根节点大
  - 查找速度: **O(log(n))**

### 树的遍历

用于数据持久化等

常规:

- 深度优先
- 广度优先

二叉树:

- 前序: 当前 => 左 => 右
- 中序: 左 => 当前 => 右
- 后序: 左 => 右 => 当前

#### 二叉排序

- 定义:
  - 把要排序的数据随意插入**二叉查找树**
  - **中序**遍历**二叉查找树**
- 时间复杂度: O(n\*log(n))

---

## 比较

| 名称 | 线性表-无序表 | 线性表-有序表  | 普通链表 | 头尾链表 / 双链表 |
| :--: | :-----------: | :------------: | :------: | :---------------: |
| 获取 |     O(1)      |      O(1)      |   O(n)   |       O(n)        |
| 设置 |     O(1)      |      O(n)      |   O(n)   |       O(n)        |
| 插入 |     O(n)      |      O(n)      |   O(n)   |       O(n)        |
| 追加 |     O(n)      |      O(n)      |   O(n)   |       O(1)        |
| 删除 |     O(n)      |      O(n)      |   O(n)   |       O(1)        |
| 搜索 |     O(n)      |   O(log(n))    |   O(n)   |       O(n)        |
| 结论 |   无需搜索    | 频繁、大量搜索 | 实用性差 | 从头尾添加、删除  |

| 名称 |       线性表-堆栈        | 链表-堆栈 |
| :--: | :----------------------: | :-------: |
| 入栈 |           O(n)           |   O(1)    |
| 出栈 |           O(n)           |   O(1)    |
| 总结 | 一般不好用、但定长时更好 |  :smile:  |

| 名称 | 线性表-队列 | 链表-队列 |
| :--: | :---------: | :-------: |
| 入队 |    O(n)     |   O(1)    |
| 出队 |    O(n)     |   O(1)    |
| 总结 |    :cry:    |  :smile:  |

| 名称 | 有序数组  |                广义树                |   二叉树   |
| :--: | :-------: | :----------------------------------: | :--------: |
| 添加 | O(log(n)) |                 O(n)                 | O(log(n))  |
| 删除 |   O(n)    |                 O(n)                 | O(log(n))  |
| 查找 |   O(n)    |                 O(n)                 | O(log(n))  |
| 修改 |   O(n)    |                 O(n)                 | O(log(n))  |
| 结论 |   :cry:   | 添加、删除、修改基于**查找**的复杂度 | :laughing: |
|  ^   |     ^     |           基础树性能并不高           |     ^      |
|  ^   |     ^     |    重点在于按照层级关系来存储数据    |     ^      |
