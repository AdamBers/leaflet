const CHANGE_FROM = 'CHANGE_FROM'
const CHANGE_TO = 'CHANGE_TO'
const CHANGE_DIRECTION = 'CHANGE_DIRECTION'

const places = [
    {
        city: 'Moscow',
        Ltd: 55.75,
        Lgt: 37.62
    },
    {
        city: 'London',
        Ltd: 51.50,
        Lgt: -0.1
    },
    {
        city: 'Berlin',
        Ltd: 52.75,
        Lgt: 13.62
    },
    {
        city: 'Paris',
        Ltd: 48.8,
        Lgt: 2.3
    },
    {
        city: 'Monaco',
        Ltd: 43.72,
        Lgt: 7.39
    },
    {
        city: 'Roma',
        Ltd: 41.9,
        Lgt: 12.5
    }
]

const defaultState = {
    set: [
        {
            from: places[0],
            to: places[1]
        },
        {
            from: places[2],
            to: places[3]
        },
        {
            from: places[4],
            to: places[5]
        }
    ],
    places: places,
    currentDirection: 0
}

export const Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_FROM: {
            console.log(action.payload.id)
            const newSet = state.set.map((element, index) => {
                if (index === action.payload.id) {
                    return { from: places[action.payload.e], to: element.to }
                }
                return element
            })

            return { ...state, set: [...newSet] }


        }
        case CHANGE_TO: {
            console.log(places[action.payload.e])
            console.log(action.payload.id)
            const newSet = state.set.map((element, index) => {
                if (index === action.payload.id) {
                    return { from: element.from, to: places[action.payload.e] }
                }
                return element
            })
            return { ...state, set: [...newSet] }
        }
        case CHANGE_DIRECTION: {
            return { ...state, currentDirection: action.payload.e - 1 }
        }
        default:
            return state
    }
}

export const changeFromAction = (e, Index) => {
    return {
        type: CHANGE_FROM,
        payload: { e: e, id: Index }
    }
}

export const changeToAction = (e, Index) => {
    return {
        type: CHANGE_TO,
        payload: { e: e, id: Index }
    }
}

export const setCurrentDirection = (e, Index) => {
    return {
        type: CHANGE_DIRECTION,
        payload: { e: e, index: Index }
    }
}


