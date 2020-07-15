export default function UserPlay(
  state = {
    userPlays: [],
    currentUserPlay: {},
    sixNumbers: [],
    superbol: 0,
    megabols: [],
    lastUserPlays: [],
    loadingButton: false,
  },
  action: any
) {
  let nextState;
  switch (action.type) {
    case "SET_USER_PLAYS":
      return {
        ...state,
        userPlays: action.userPlays,
      };
    case "SET_CURRENT_USER_PLAY":
      return {
        ...state,
        currentUserPlay: action.currentUserPlay,
      };
    case "SET_SIX_NUMBERS":
      return {
        ...state,
        sixNumbers: action.sixNumbers,
      };
    case "SET_SUPERBOL":
      return {
        ...state,
        superbol: action.superbol,
      };
    case "SET_MEGABOLS":
      return {
        ...state,
        megabols: action.megabols,
      };
    case "SET_LAST_USER_PLAYS":
      return {
        ...state,
        lastUserPlays: action.lastUserPlays,
      };
    case "SET_LOADING_BUTTON":
      return {
        ...state,
        loadingButton: action.loadingButton,
      };
    default:
      return state;
  }
}
