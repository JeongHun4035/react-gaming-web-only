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
  background-color: #212226;
  border-radius: 0.7rem;
`

const TreeItem = styled.li`
  margin: 5px;
  cursor: pointer;
  position: relative;
`

const TreeItemContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
  &::before {
    display: inline-block;
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    color: #81c784;
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
  // eslint-disable-next-line no-unused-vars
  onRowClick?: (id: ITreeItem) => void
}> = ({ data, direction = "column", onRowClick }) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set())
  const rowToggleEvent = (id: string) => {
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

  const rowClickEvent = (item: ITreeItem) => {
    if (onRowClick) {
      onRowClick(item)
    }
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
                onClick={() => {
                  rowToggleEvent(node.id)
                  rowClickEvent(node)
                }}
              >
                {node.parentId === null ? (
                  <h3>
                    {node.name}
                    {children.length > 0 && ` (${children.length}) `}
                  </h3>
                ) : (
                  <span>
                    {node.name}
                    {children.length > 0 && ` (${children.length}) `}
                  </span>
                )}
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

  const roots = data.filter((node) => node.parentId === null)
  return <div>{renderTree(roots)}</div>
}

export default CustomTree
