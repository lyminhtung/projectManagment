import React from 'react'
import Box from '@mui/material/Box';
import ListColumn from './ListColumns/ListColumn';
import { mapOrder } from '~/utils/sorts';
import {DndContext,PointerSensor,useSensor,useSensors,MouseSensor,TouchSensor,DragOverlay,defaultDropAnimationSideEffects} from '@dnd-kit/core';
import {useState, useEffect} from 'react';
import {arrayMove} from '@dnd-kit/sortable';
import Column from './ListColumns/Column/Column';
import CardItem from './ListColumns/Column/ListCards/Card/Card';
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}
function BoardContent({board}) {
  //Kich hoat sensor khi di chuyen con tro voi khoang cach 10px
  // const pointerSensor = useSensor(PointerSensor,{
  //   activationConstraint:{
  //     distance: 10
  //   }
  // })
  const mouseSensor = useSensor(MouseSensor,{
    activationConstraint:{
      distance: 10
    }
  })
  //Kich hoat sensor khi di chuyen voi touch nhan giu 250ms va cham di chuyen 500px
  const touchSensor = useSensor(TouchSensor,{
    activationConstraint:{
      delay: 250,
      tolerance: 500
    }
  })
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor,touchSensor)
  //State luu tru cac cot da sap xep
  const [orderedColumnsState, setOrderedColumnsState] = useState([])
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  //Khi board thay doi, cap nhat lai state ban dau
  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  },[board])
  // Trigger Khi bat dau hanh dong keo mot phan tu(drag)
  const handleDragStart = (event) => {
    console.log('drag start',event);
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }
  // Trigger Khi ket thuc hanh dong keo mot phan tu(drop)
  const handleDragEnd = (event) => {
    // console.log('drag end',event);
    //lay thang active va thang over tu trong event cua dnd
    const {active,over} = event;
    if(!over) return;
    if(active.id !== over.id){
      //lay vi tri tu thang active
      const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id);
      //lay vi tri tu thang over
      const newIndex = orderedColumnsState.findIndex(c => c._id === over.id);
      //sap xep lai theo vi tri moi
      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex);
      // Sau se xu li API
      // const dndOrderedColumnIds = dndOrderedColumns.map(c => c._id);
      // console.log('dndOrderedColumns',dndOrderedColumns);
      // console.log('dndOrderedColumnIds',dndOrderedColumnIds);

      //Cap nhap lai state ban dau sau khi da sap xep
      setOrderedColumnsState(dndOrderedColumns);
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  //Animation khi tha mot phan tu
  const dropAnimation ={
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active:{
          opacity: '0.5',
        }
      }
    })
  }
  return (
    <DndContext 
    sensors={sensors}
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd} 
    >
      <Box sx={{
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#34495e' : '#1976d2',
        width : '100%',
        height :(theme) => theme.projectCustom.boardContentHeight,
        p:'10px 0',

       }}>        
          <ListColumn columns={orderedColumnsState}/>
          <DragOverlay dropAnimation={dropAnimation}>
            {(!activeDragItemType) && null}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData}/>}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <CardItem card={activeDragItemData}/>}
          </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
