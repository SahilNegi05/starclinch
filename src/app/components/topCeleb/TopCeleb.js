/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export default function TopCeleb() {
  const [state, setState] = React.useState(true);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div class="component-44-parent">
        <div class="component-45">
          <div class="frame-parent6">
            <div class="frame-wrapper5">
              <div class="frame-parent7">
                <button
                  onClick={() => setState(true)}
                  class={`${"photos-container"} ${state ? "asibyd" : "asddf3"}`}
                >
                  <div class="photos1">Photos</div>
                </button>
                <button
                  onClick={() => setState(false)}
                  id="videos"
                  class={`${"videos-container"} ${
                    !state ? "asibyd" : "asddf3"
                  }`}
                >
                  <div class="videos1">Videos</div>
                </button>
              </div>
            </div>

            {state ? (
              <div class="frame-wrapper6">
                <div class="frame-parent8">
                  <div class="frame-parent9">
                    <img
                      class="frame-child13"
                      alt=""
                      src="frame-1321314655-1@2x.png"
                    />

                    <img
                      class="frame-child14"
                      alt=""
                      src="frame-1321314656-1@2x.png"
                    />

                    <img
                      class="frame-child15"
                      alt=""
                      src="frame-1321314657-2@2x.png"
                    />

                    <img
                      class="frame-child16"
                      alt=""
                      src="frame-1321314658-2@2x.png"
                    />
                  </div>
                  <div class="frame-parent10">
                    <img
                      class="frame-child17"
                      alt=""
                      src="frame-1321314657-1@2x.png"
                    />

                    <img
                      class="frame-child18"
                      alt=""
                      src="frame-1321314658-1@2x.png"
                    />

                    <img
                      class="frame-child19"
                      alt=""
                      src="frame-1321314660-1@2x.png"
                    />

                    <img
                      class="frame-child20"
                      alt=""
                      src="frame-1321314659-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div class="frame-wrapper6">
                <div class="frame-parent8">
                  <div class="frame-parent9">
                    <img
                      onClick={() => openPopup()}
                      class="frame-child15-cs"
                      alt=""
                      src="frame-1321314658-2@2x.png"
                    />
                    <img
                      onClick={() => openPopup()}
                      class="frame-child15-cs"
                      alt=""
                      src="frame-1321314658-2@2x.png"
                    />
                    <img
                      onClick={() => openPopup()}
                      class="frame-child15-cs"
                      alt=""
                      src="frame-1321314658-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            )}

            <div class="frame-wrapper7">
              <div class="rectangle-group">
                <div class="frame-child21"></div>
                <div class="frame-child22"></div>
                <div class="frame-child23"></div>
                <div class="frame-child24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Popup
          imageSrc="frame-1321314658-2@2x.png"
          onClose={() => closePopup()}
        />
      )}
    </>
  );
}

const Popup = ({ imageSrc, onClose }) => {
  return (
    <div className="popup-background" onClick={onClose}>
      <div className="popup-container">
        <span className="close-button">&times;</span>
        <img src={imageSrc} alt="Popup" className="popup-image" />
      </div>
    </div>
  );
};
