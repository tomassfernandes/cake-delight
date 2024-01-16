import React from "react";
import Lottie from "lottie-react";
import Countdown from "react-countdown";
import animationData from "../assets/loading-dots-animation.json";
import { instagramIcon, twitterIcon, facebookIcon } from "../Items/SocialItems";

export default function ComingSoonSection() {
  const eventDate = new Date("2024-02-25T23:59:59");

  return (
    <section className="coming-soon-section">
      <div className="section coming-soon-img-background">
        <div className="coming-soon-heading-div">
          <h2 className="heading-secondary">Coming Soon</h2>
          <Lottie className="dots-animation" animationData={animationData} />
        </div>
        <p className="coming-soon-p">
          Get ready for a delightful journey into the world of exquisite
          flavors! Our <span>soon-to-be-released</span> donuts are crafted with
          passion and creativity. From classic favorites to innovative twists,
          we're diligently working to bring you a tempting array of flavors that
          will elevate your taste buds to new heights!
        </p>
        <div className="coming-soon-timer-div">
          <Countdown
            date={eventDate}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                // Render something when the countdown is complete
                return <span>Event has ended!</span>;
              } else {
                // Render the countdown
                return (
                  <div className="timer-div">
                    <p className="coming-soon-timer-p">
                      {days} days, {hours} hours
                    </p>
                    <p className="coming-soon-timer-p">
                      {minutes} min, {seconds} sec
                    </p>
                  </div>
                );
              }
            }}
          />
          <div className="coming-soon-socials-div">
            {instagramIcon}
            {facebookIcon}
            {twitterIcon}
          </div>
        </div>
      </div>
    </section>
  );
}
