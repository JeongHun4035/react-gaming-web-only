import { useState } from "react"

import styled from "styled-components"

import { ITreeItem } from "@/components/types/tree"

const TreeContainer = styled.ul<{ direction: "row" | "column" }>`
  list-style-type: none;
  padding-left: ${(props) => (props.direction === "column" ? "10px" : "0")};
  margin: 0;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
`

const TreeItem = styled.li`
  margin: 5px;
  cursor: pointer;
  position: relative;
`

const TreeItemContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  white-space: nowrap;

  &::before {
    content: "${(props) => (props.$isOpen ? "▾" : "▸")}";
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
  }
`

const SubTreeContainer = styled.ul<{
  $isOpen: boolean
  direction: "row" | "column"
}>`
  list-style-type: none;
  padding-left: 10px;
  margin: 0;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: ${(props) => (props.direction === "row" ? "absolute" : "relative")};
  top: 100%;
  left: 0;
`

const CustomTree: React.FC<{
  data: ITreeItem[]
  direction?: "row" | "column"
}> = ({ data, direction = "column" }) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set())
  const handleToggle = (id: string) => {
    setOpenNodes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const renderTree = (nodes: ITreeItem[]) => {
    return (
      <TreeContainer direction={direction}>
        {nodes.map((node) => {
          const isOpen = openNodes.has(node.id)
          const children = data.filter((child) => child.parentId === node.id)

          return (
            <TreeItem key={node.id}>
              <TreeItemContent
                $isOpen={isOpen}
                onClick={() => children.length > 0 && handleToggle(node.id)}
              >
                {node.name}
              </TreeItemContent>
              {children.length > 0 && (
                <SubTreeContainer $isOpen={isOpen} direction={direction}>
                  {renderTree(children)}
                </SubTreeContainer>
              )}
            </TreeItem>
          )
        })}
      </TreeContainer>
    )
  }

  const roots = data.filter((node) => node.parentId === "#")
  return <div>{renderTree(roots)}</div>
}

export default CustomTree
