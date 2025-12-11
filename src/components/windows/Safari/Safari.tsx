import WindowControls from "#components/WindowControls";
import WIndowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <WIndowWrapper windowKey="safari" windowName="Safari">
      <>
        <div id="window-header">
          <WindowControls name={"safari"} />
          <PanelLeft size={20} className="icon ml-1 md:ml-10" />
          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>
          <div className="flex-1 flex-center gap-3 ">
            <ShieldHalf className="icon" />

            <div className="search">
              <Search className="icon" />
              <input type="text" placeholder="Search" className="flex-1" />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
          </div>
        </div>
        <div className="blog">
          <h2>Blog</h2>
          <p>Cooming soon...</p>
        </div>
      </>
    </WIndowWrapper>
  );
};

export default Safari;
