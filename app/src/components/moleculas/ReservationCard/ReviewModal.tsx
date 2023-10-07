import { IonContent, IonModal } from "@ionic/react";
import React, { useRef, useState } from "react";
import { useCreateReviewMutation } from "schema";
import {
  Background,
  CustomButton,
  Header,
  MainCard,
} from "src/components/atomos";
import { StarRank } from "src/components/moleculas";
type ReviewModalProps = {
  userId: string;
  sportCenterId: string;
};
const ReviewModal = ({ userId, sportCenterId }: ReviewModalProps) => {
  const [stars, setStars] = useState<number>();
  const [review, setReview] = useState("");
  const ref = useRef<HTMLIonModalElement>(null);
  const [createReview] = useCreateReviewMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createReview({
      variables: {
        input: {
          sportCenterId: sportCenterId,
          userId: userId,
          review: review,
          ranking: stars || 0,
        },
      },
      onCompleted: () => {
        ref.current?.dismiss();
      },
    });
  };
  return (
    <IonModal ref={ref} trigger="review-modal">
      <Header
        title="Deja tu reseña"
        dismiss={() => {
          ref.current?.dismiss();
        }}
      />
      <IonContent>
        <Background>
          <form className="flex flex-col gap-2 py-10" onSubmit={handleSubmit}>
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
                  onChange={(e) => setReview(e.currentTarget.value)}
                ></textarea>
              </div>
            </MainCard>
            <StarRank stars={stars} setStars={setStars} />
            <CustomButton title="Enviar" type="submit" color="sucessfull" />
          </form>
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default ReviewModal;
