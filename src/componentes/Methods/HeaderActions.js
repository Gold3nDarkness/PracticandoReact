export const selectVentana = (item) => {
    console.log("Seleccionaste: ", item.title);
    return {
        type:"ITEM SELECTED",
        payload: item
    }
};