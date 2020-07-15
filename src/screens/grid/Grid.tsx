import React, { useState } from "react";
import Modal from "react-native-modal";

import MiniLottoBackground from "../../components/miniLottoBackground";
import Header from "../Header";
import Tirage from "./tirage/Tirage";
import Drawer from "../../components/navigation/drawer";
import { images } from "../../styles/Image";

export default function Grid() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <MiniLottoBackground image={images.auth.background}>
      <Header
        grid={false}
        showDrawer={() => setShowDrawer(true)}
        headerMode={true}
        title="La Grille"
      />
      <Tirage />
      <Modal
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
        isVisible={showDrawer}
        style={{ flex: 1, margin: 0 }}
      >
        <Drawer setShowDrawer={() => setShowDrawer(false)} />
      </Modal>
    </MiniLottoBackground>
  );
}
