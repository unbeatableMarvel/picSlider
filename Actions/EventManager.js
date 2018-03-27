export const ClickTOChangePic = (pic) => {

    console.log("You clicked on pic button change",pic);
    return {
        type: 'CLICKED_BUTTON',
        payload: pic
    }
};
