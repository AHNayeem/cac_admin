import styles from './AppDriver.module.css';

import React, { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialItems = [
    { id: '1', label: 'Label 1 will be here.', content: 'Main content will be here.' },
    { id: '2', label: 'Label 2 will be here.', content: 'Main content will be here.' },
    { id: '3', label: 'Label 3 will be here.', content: 'Main content will be here.' },
    { id: '4', label: 'Label 4 will be here.', content: 'Main content will be here.' },
];

const SortableItem = ({ id, item }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: "grab",
    };

    return (
        <div className={styles.app_item} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {/* <strong>{item.label}</strong>
            <p>{item.content}</p> */}
            <div className={styles.app_left_content}><input value={item.label} /></div>
            <div className={styles.app_mid_content}><input value={item.content} /></div>
            <div className={styles.app_right_content}>
                <label className={styles.switch} htmlFor={'switch' + id}>
                    <input id={'switch' + id} type="checkbox" defaultChecked />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </div>
        </div>
    );
};

function AppDriver() {
    const [items, setItems] = useState(initialItems);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // Drag starts after 5px movement
            },
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        // Avoid unnecessary updates if dropped in the same position
        if (active.id !== over?.id) {
            setItems((prevItems) => {
                const oldIndex = prevItems.findIndex((item) => item.id === active.id);
                const newIndex = prevItems.findIndex((item) => item.id === over.id);
                return arrayMove(prevItems, oldIndex, newIndex);
            });
        }
    };

    return (
        <div className={styles.page_container}>
            {/* <div style={{ width: "300px", margin: "auto", marginTop: "50px" }}> */}
            <div className={styles.inner_container}>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={items.map((item) => item.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        {items.map((item) => (
                            <SortableItem key={item.id} id={item.id} item={item} />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}

export default AppDriver;
