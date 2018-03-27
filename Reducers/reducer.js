export default function (state = 0, action) {
	if(state==3)
	{
		action.payload=0;
	}
    switch (action.type) {
        case 'CLICKED_BUTTON':
            return action.payload;
            break;
    }
    return state;
}