import { UserPlayServiceDataParams } from "../../Types/UserPlayType";

const setUserPlays = (userPlays: Array<UserPlayServiceDataParams>) => {
  return (
    dispatch: (arg0: {
      type: string;
      userPlays: Array<UserPlayServiceDataParams>;
    }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_USER_PLAYS",
      userPlays,
    });
  };
};

const setCurrentUserPlay = (currentUserPlay: Object) => {
  return (
    dispatch: (arg0: { type: string; currentUserPlay: Object }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_CURRENT_USER_PLAY",
      currentUserPlay,
    });
  };
};

const setUserPlaySixNumbers = (sixNumbers: Array<Number>) => {
  return (
    dispatch: (arg0: { type: string; sixNumbers: Array<Number> }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_SIX_NUMBERS",
      sixNumbers,
    });
  };
};

const setSuperbol = (superbol: number) => {
  return (
    dispatch: (arg0: { type: string; superbol: number }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_SUPERBOL",
      superbol,
    });
  };
};

const setMegabols = (megabols: Array<Number>) => {
  return (
    dispatch: (arg0: { type: string; megabols: Array<Number> }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_MEGABOLS",
      megabols,
    });
  };
};

const setLastUserPlays = (lastUserPlays: Array<any>) => {
  return (
    dispatch: (arg0: { type: string; lastUserPlays: Array<any> }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_LAST_USER_PLAYS",
      lastUserPlays,
    });
  };
};

function setButtonValidationLoadingState(loadingButton: boolean) {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: "SET_LOADING_BUTTON",
      loadingButton,
    });
  };
}

export {
  setUserPlays,
  setCurrentUserPlay,
  setUserPlaySixNumbers,
  setLastUserPlays,
  setButtonValidationLoadingState,
};
