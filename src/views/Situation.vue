<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>
      <div v-for="situation in thisSituation" :key="situation.isid"></div>
      <span class="SNumber">{{ thisSituation.isid }} </span>
      {{ thisSituation.head }}
    </v-card-title>
    <v-divider></v-divider>

    <v-list id="theChoices" two-line>
      <v-list-item v-for="choice in thisSituation.choices" :key="choice.index">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-circle</v-icon>
        </v-list-item-icon>
        <router-link
          :to="{ path: '/Situation/' + choice.lid }"
          class="noDecor"
          tag="li"
          >{{ choice.ctext }}</router-link
        >
      </v-list-item>
    </v-list>
  </v-card>
</template>
<style scoped>
.noDecor {
  list-style: none;
  cursor: pointer;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.SNumber {
  color: gray;
  margin-right: 0.5em;
}
</style>

<script>
export default {
  data() {
    return {
      situations: [
        {
          isid: 1,
          head: "You realise there is a problem",
          choices: [
            { ctext: "And you ignore it", lid: "3" },
            {
              ctext:
                "So you decide to share your concerns with: your boss, the wall, a colleague etc ",
              lid: "2"
            }
          ]
        },
        {
          isid: 2,
          head:
            "You[with the voice of the teacher from Peanuts]: blah, moan , rhubarb ",
          choices: [
            {
              ctext:
                "Them / It: that's terrible something really should be done",
              lid: "3"
            },
            {
              ctext:
                "Them / It: That's not something that you or I should be concerned about ",
              lid: "3"
            },
            {
              ctext:
                "Them / It: You're a contractor / consultant / anarchist right, you love this sort of thing am I right?",
              lid: "3"
            },
            {
              ctext:
                "Them / It: Ok so what do you think can be done about this?",
              lid: "4"
            }
          ]
        },
        {
          isid: 3,
          head:
            "The Problem goes to the place where all problems go.... The End"
        },
        {
          isid: 4,
          head: "You [still hopeful]: if we just ...",
          choices: [
            {
              ctext: "Them: I was kind of interested but now, not so much",
              lid: "3"
            },
            {
              ctext:
                "Them [hoping to fob you off]: Finding problems is easy, write a business case which solves the problem, saves money year on year and ensure that you don't take anyone away from what they are doing right now - OK?",
              lid: "5"
            }
          ]
        },
        {
          isid: 5,
          head: "Challenge accepted",
          choices: [
            {
              ctext:
                "Draft presentation, present presentation, rewrite presentation based on feedback and hope",
              lid: "2"
            },
            {
              ctext: "Consider maybe your problems aren't all that important",
              lid: "6"
            },
            {
              ctext:
                "Draft business case, present business case, rewrite business case and then...",
              lid: "3"
            }
          ]
        },
        {
          isid: 6,
          head:
            "Your managers says: a problem shared is a problem in two parts, yours and mine! & I'm not keen on problems",
          choices: [
            {
              ctext:
                "What if I did an operational review in department X (where you happen to know all hell is breaking loose) and presented that back to you?",
              lid: "7"
            },
            {
              ctext: "Maybe talking to senior management isn't for you",
              lid: "3"
            },
            {
              ctext:
                "Share your unhappiness with a well chosen gif on twitter, write a blog - ensure that it stays in draft, put a survey on the intranet. In short give up on people",
              lid: "3"
            }
          ]
        },
        {
          isid: 7,
          head:
            "You [asking the manager of the department X] Is it true that this is the worst performing part of the organization?",
          choices: [
            {
              ctext: "Manager: You've not done this before you have you?",
              lid: "2"
            },
            {
              ctext:
                "Manager: Let's pretend you didn't ask that, but we do have our challenges.",
              lid: "8"
            },
            {
              ctext:
                "Manager: You're a contractor / consultant / anarchist right, you love this sort of thing am I right?",
              lid: "2"
            }
          ]
        },
        {
          isid: 8,
          head: "What the operational review said",
          choices: [
            {
              ctext: "What's an operational review?",
              lid: "3"
            },
            {
              ctext:
                "It's bad really bad and they are all to blame, but not me!",
              lid: "2"
            },
            {
              ctext: "A very long list of gripes, moans AND genuine problems",
              lid: "9"
            }
          ]
        },
        {
          isid: 9,
          head:
            "You presenting the operational review minus gripes and moans to Tom, the only person who will listen",
          choices: [
            {
              ctext: "Audience keels over from PowerPoint-Slide-itus",
              lid: "3"
            },
            {
              ctext: "...Still talking...",
              lid: "10"
            },
            {
              ctext:
                "Tom [seeing opportuntiy to look good]: Jeez - you're going to need a sponsor for this",
              lid: "10"
            }
          ]
        },
        {
          isid: 10,
          head: "Meawhile hell has broken loose...",
          choices: [
            {
              ctext: "Satan[laughs menacingly]",
              lid: "3"
            },
            {
              ctext: "Isn't this all a bit overblown",
              lid: "6"
            },
            {
              ctext:
                "Denziens of Hades previously department X[wailing in the darkness]:What became of the operational review",
              lid: "11"
            },
            {
              ctext: "Sponsor, AKA Tom[calmly]: isn't time to do your day job",
              lid: "3"
            }
          ]
        },
        {
          isid: 11,
          head: "No time to loose",
          choices: [
            {
              ctext:
                "Find Hades dwellers who aren't yet part of the furniture, and prioritize list of problems from OR",
              lid: "12"
            },
            {
              ctext:
                "Senior Demon : You're a contractor / consultant / anarchist right, you love this sort of thing am I right?",
              lid: "2"
            }
          ]
        },
        {
          isid: 12,
          head: "Make like Orpheus and Oasis don't look back in anger",
          choices: [
            {
              ctext:
                "With the list or problems, prioritize and find volunteers to help solve them",
              lid: "12"
            },
            {
              ctext:
                "Senior Demon : You're a contractor / consultant / anarchist right, you love this sort of thing am I right?",
              lid: "2"
            },
            {
              ctext:
                "The corporate immune system has discovered what you're up to...",
              lid: "3"
            }
          ]
        },
        {
          isid: 12,
          head: "Get the volunteers and problems together for a day and",
          choices: [
            {
              ctext:
                "Bore the living bejesus from them with a day long dose of PowerPoint",
              lid: "2"
            },
            {
              ctext:
                "Make heavy use of the following words / phrases: best practice, agile mindset, synergy, going forward positively",
              lid: "3"
            },
            {
              ctext: "The corporate immune system has spotted you",
              lid: "3"
            },
            {
              ctext:
                "Speak a little, listen a lot, make notes, share ideas, create buzz use liberating structures",
              lid: "13"
            }
          ]
        },
        {
          isid: 13,
          head: "You didn't think it was that easy did you",
          choices: [
            {
              ctext: "The corporate immune system has spotted you",
              lid: "14"
            }
          ]
        }
      ]
    };
  },
  props: ["sid"],
  computed: {
    thisSituation: function() {
      let self = this;
      return this.situations.find(function(situation) {
        return situation.isid == self.sid;
      });
    }
  }
};
</script>

<style></style>
