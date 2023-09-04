import { IonContent, IonModal } from "@ionic/react";
import React, { useRef, useState } from "react";
import {
  Background,
  CustomButton,
  Header,
  MainCard,
} from "src/components/atomos";
import { StarRank } from "src/components/moleculas";

const ReviewModal = () => {
  const [stars, setStars] = useState<number>();
  const ref = useRef<HTMLIonModalElement>(null);
  return (
    <IonModal
      ref={ref}
      trigger="review-modal"
      style={{
        "--max-height": "350px",
        "--max-width": "350px",
      }}
    >
      <Header
        title="Deja tu reseña"
        dismiss={() => {
          ref.current?.dismiss();
        }}
      />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-2 py-4">
            <MainCard>
              <div className="flex">
                <textarea
                  className="bg-transparent text-customText outline-none flex-1 resize-none p-4"
                  name="review"
                  id="review-id"
                  placeholder="Escribe tu reseña o comentario aqui!"
                  cols={25}
                  rows={6}
                  maxLength={200}
                ></textarea>
              </div>
            </MainCard>
            <StarRank stars={stars} setStars={setStars} />
            <CustomButton
              title="Enviar"
              type="button"
              color="sucessfull"
              onClick={() => {
                // mutation save comment
              }}
            />
          </div>
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default ReviewModal;
