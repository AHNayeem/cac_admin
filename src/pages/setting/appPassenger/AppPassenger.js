import { useState } from 'react';
import styles from './AppPassenger.module.css'
import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
} from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialItems = [
    { id: '1', label: 'Label will be here.', content: 'Main content will be here.' },
    { id: '2', label: 'Label will be here.', content: 'Main content will be here.' },
    { id: '3', label: 'Label will be here.', content: 'Main content will be here.' },
    { id: '4', label: 'Label will be here.', content: 'Main content will be here.' }
];

const SortableItem = ({ id, item }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'grab',
    };

    return (
        <div className={styles.app_item} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className={styles.app_left_content}>{item.label}</div>
            <div className={styles.app_mid_content}>{item.content}</div>
            <div className={styles.app_right_content}>
                <label className={styles.switch} htmlFor={'switch' + id}>
                    <input id={'switch' + id} type="checkbox" checked />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </div>
        </div>
    );
};

function AppPassenger() {
    const [items, setItems] = useState(initialItems);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }, // Drag starts after 5px movement
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((prevItems) => {
                const oldIndex = prevItems.indexOf(active.id);
                const newIndex = prevItems.indexOf(over.id);
                return arrayMove(prevItems, oldIndex, newIndex);
            });
        }
    };

    return (
        <div className={styles.page_container}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    <div className={styles.inner_container}>
                        {items.map((item) => (
                            <SortableItem key={item.id} id={item.id} item={item} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}

export default AppPassenger;