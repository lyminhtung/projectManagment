import React from 'react'
import Box from '@mui/material/Box';
import ListColumn from './ListColumns/ListColumn';
import { mapOrder } from '~/utils/sorts';
import {DndContext,PointerSensor,useSensor,useSensors,MouseSensor,TouchSensor,DragOverlay,defaultDropAnimationSideEffects} from '@dnd-kit/core';
import {useState, useEffect} from 'react';
import {arrayMove} from '@dnd-kit/sortable';
import Column from './ListColumns/Column/Column';
import CardItem from './ListColumns/Column/ListCards/Card/Card';
import {cloneDeep} from 'lodash'
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
  // Tim mot cai column theo cardId
  const findColumnByCardId = (cardId) => {
    // Dan nay can luu y, nen dung c.cards thay vi c.cardOrderIds boi vi o buoc handleDragOver chung ta se lam du lieu cho cards hoan chinh truoc roi moi tao ra cardOrderIds moi.
    return orderedColumnsState.find(c => c?.cards?.map(c => c._id).includes(cardId))
  }
  // Trigger Khi bat dau hanh dong keo mot phan tu(drag)
  const handleDragStart = (event) => {
    // console.log('drag start',event);
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }
  // Trigger trong qua trinh keo mot phan tu
  const handleDragOver = (event) =>{
    
    //Khong lam gi neu la dang keo column
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN){
      return;
    }
    // console.log('drag over',event);
    const {active,over} = event;
    // Can dam bao neu khong ton tai active hoac over (khi keo ra khoi pham vi container) thi khong lam gi
    if(!active||!over) return;
    // activeDraggingCard: la cai card dang duoc keo
    const {id: activeDraggingCardId, data:{current: activeDraggingCardData}} = active
    // overCard: la cai card duoc tuong tac voi card dang duoc keo
    const {id: overCardId} = over
    // Tim 2 cai columns theo cardId
    const activeColumn= findColumnByCardId(activeDraggingCardId)
    const overColumn= findColumnByCardId(overCardId)
    // neu khong tim thay thi khong lam gi tranh crash trang
    if(!activeColumn || !overColumn) return
    // Xu li logico day chi khi keo card qua 2 column khac nhau, con neu keo card trong chinh column ban dau thi khong lam gi
    // Vi day dang la doan xu ly luc keo(handleDragOver), con xy ly luc keo xong sxuoi thi no lai la van de khac o (handleDragEnd) 
    if(activeColumn._id !== overColumn._id){
      setOrderedColumnsState(prev =>{
        // Tim vi tri (index) cua cai overCard trong column dich(noi ma activeCard sap duoc tha)
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
        // Logic tinh toan cardIndex moi cua thu vien dnd kit
        let newCardIndex 
        const isBelowOverItem = active.rect.current.translated && 
        active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1:0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length
        // clone mang OrderedColumnsState cu ra mot cai moi de xu ly data roi return - cap nhap lai OrderedColumnsState moi
        const nextColumns = cloneDeep(prev)
        const nextActiveColumn = nextColumns.find(c => c._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(c => c._id === overColumn._id)
        //column cu
        if(nextActiveColumn){
          // Xoa card o cai column active(cung co the hieu la column cu, cai luc ma keo card ra khoi no de sang column khac)
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          // Cap nhat lai mang cardOrderIds cho chuan du lieu
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }
        //column moi
        if(nextOverColumn){
          // Kiem tra xem card dang keo no co ton tai o overColumn chua, neu co thi can xoa no truoc
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

          // Tiep theo la them card moi vao overColumn theo vi tri index moi
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex,0,activeDraggingCardData)
          // Cap nhat lai mang cardOrderIds cho chuan du lieu
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }
        console.log('nextColumns',nextColumns);
        // set lai state ban dau
        return nextColumns
      })
    }
  }
  // Trigger Khi ket thuc hanh dong keo mot phan tu(drop)
  const handleDragEnd = (event) => {
    
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD){
      // console.log('hanh dong keo tha card tam thoi khong lam gi')
      return;
      
    }

    // console.log('drag end',event);
    //lay thang active va thang over tu trong event cua dnd
    const {active,over} = event;
    // Can dam bao neu khong ton tai active hoac over (khi keo ra khoi pham vi container) thi khong lam gi tranh crash trang 
    if(!active||!over) return;
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
    onDragOver={handleDragOver}
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
