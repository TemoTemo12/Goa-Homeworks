import React from "react";
import Button from "./components/button";
import GroupExample from "./components/GroupExample";
import ArbitraryGroup from "./components/ArbitraryGroup";
import SiblingState from "./components/SiblingState";
import PeerExample from "./components/PeerExample";
import ArbitraryPeer from "./components/ArbitraryPeer";
import DirectChildren from "./components/DirectChildren";
import Descendants from "./components/Descendants";
import GroupHasDescendants from "./components/GroupHasDescendants";
import PeerHasDescendants from "./components/PeerHasDescendants";
import BeforeAfter from "./components/BeforeAfter";
import PlaceholderText from "./components/PlaceholderText";
import FileInput from "./components/Fileinput";
import HighlightedText from "./components/HighlightedText";
import FirstLineLetter from "./components/FirstLineLetter";
import DialogBackdrop from "./components/DialogBackdrop";
import ReducedMotion from "./components/ReducedMotion";
import PrefersContrast from "./components/PrefersContrast";
import ForcedColors from "./components/ForcedColors";

function App() {
  return (
    <div className="space-y-8 p-8">
      <Button />
      <GroupExample />
      <ArbitraryGroup />
      <SiblingState />
      <PeerExample />
      <ArbitraryPeer />
      <DirectChildren />
      <Descendants />
      <GroupHasDescendants />
      <PeerHasDescendants />
      <BeforeAfter />
      <PlaceholderText />
      <FileInput />
      <HighlightedText />
      <FirstLineLetter />
      <DialogBackdrop />
      <ReducedMotion />
      <PrefersContrast />
      <ForcedColors />
    </div>
  );
}

export default App;
