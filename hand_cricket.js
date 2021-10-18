const match_details_submit = document.getElementById("match_details_submit");
const whole_add_player = document.querySelector(".page_2");
var players_total, teamname, total_overs, user_toss;
const inputbox = document.querySelector(".input-field input");
const add_btn = document.querySelector(".input-field button");
const playerlist = document.querySelector(".playerlist");
const remplayer = document.querySelector(".remplayer");
var user_player_arr = [];
const add_player_submit_button = document.getElementById("add_player_submit_button");
const page_3 = document.querySelector(".page_3");
var player_user_name = [];
const player_comp_name = ["Sachin", "Dilshan", "Smith", "Sangakara", "Ponting", "De viliers", "Kallis", "Zaheer Khan", "Malinga", " Starc", "Muralidharan"];
const total_overs_span = document.getElementsByClassName("tot-over");
const result = document.getElementById("msg");
// innings and bat or bowl indicator
const user_does_span = document.getElementById("user-does");
const comp_does_span = document.getElementById("comp-does");
const user_job = document.getElementById("user-job");
const comp_job = document.getElementById("comp-job");
// choices div
const one_div = document.getElementById("one");
const two_div = document.getElementById("two");
const three_div = document.getElementById("three");
const four_div = document.getElementById("four");
const six_div = document.getElementById("six");
const zero_div = document.getElementById("zero");
// score,over,wickets,runrate,reqrate
const user_score_span = document.querySelectorAll(".runs-user");
const user_over_span = document.querySelectorAll(".comp-over-user");
const comp_score_span = document.querySelectorAll(".runs-comp");
const comp_over_span = document.querySelectorAll(".comp-over-comp");
const user_wickets_span = document.querySelectorAll(".user-wickets");
const comp_wickets_span = document.querySelectorAll(".comp-wickets");
const runrate_user_span = document.getElementById("runr-user");
const runrate_comp_span = document.getElementById("runr-comp");
const reqd_comp_span = document.getElementById("reqr-comp");
const reqd_user_span = document.getElementById("reqr-user");
// place for user and comp_players
const place_user_1 = document.getElementById("place_1_user");
const place_user_2 = document.getElementById("place_2_user");
const place_comp_1 = document.getElementById("place_1_comp");
const place_comp_2 = document.getElementById("place_2_comp");
const arrow_user_1 = document.getElementById("arrow-1-user");
const arrow_user_2 = document.getElementById("arrow-2-user");
const arrow_comp_1 = document.getElementById("arrow-1-comp");
const arrow_comp_2 = document.getElementById("arrow-2-comp");
// strike html
const cp_name_1_span = document.getElementById("cp_name_1");
const cp_run_1_span = document.getElementById("cp_score_1");
const cp_ball_1_span = document.getElementById("cp_ball_1");
const cp_name_2_span = document.getElementById("cp_name_2");
const cp_run_2_span = document.getElementById("cp_score_2");
const cp_ball_2_span = document.getElementById("cp_ball_2");
const up_name_1_span = document.getElementById("up_name_1");
const up_run_1_span = document.getElementById("up_score_1");
const up_ball_1_span = document.getElementById("up_ball_1");
const up_name_2_span = document.getElementById("up_name_2");
const up_run_2_span = document.getElementById("up_score_2");
const up_ball_2_span = document.getElementById("up_ball_2");
const comp_score_card = document.querySelector(".comp_score_card");
const user_score_card = document.querySelector(".user_score_card");
const view_score_btn = document.getElementById("view");
const page_4_score_card = document.querySelector(".page_4_score_card");
const cancel_scoreboard = document.getElementById("cancel-scoreboard");
const user_name_change = document.getElementsByClassName("user_name");
var user_score = 0,
  comp_score = 0;
var ball_user = 0,
  over_finished_user = 0,
  extra_ball_user = 0,
  prev_over_user = 0;
var ball_comp = 0,
  over_finished_comp = 0,
  extra_ball_comp = 0,
  prev_over_comp = 0
var who_is_batting_now = "null";
var wicket_user = 0,
  wicket_comp = 0;
var target = 0;
var runrate_user = 0,
  runrate_comp = 0,
  rr_return;
var reqd_comp = 0,
  reqd_user = 0;
var req_return = 0;
var total_wickets;
var batting, bowling;
const player_user_runs = [];
const player_comp_runs = [];
const player_user_balls = [];
const player_comp_balls = [];
const player_user_status = [];
const player_comp_status = [];
var on_strike_index_user = 0,
  on_strike_index_comp = 0;
var non_strike_index_user = 1,
  non_strike_index_comp = 1;
var img = ["zero_t.png", "one_t.png", "two_t.png", "three_t.png", "four_t.png", "five_t.png", "six_t.png"];
//When user touches input box of add player
inputbox.onkeyup = function() {
  myFunction(); //calling myfunction
};

function myFunction() {
  let player = inputbox.value; //getting user entering player name into variable
  if ((player.trim() != 0) && ((user_player_arr.length) < players_total)) {
    add_btn.classList.add("active"); //if user enters any value then activate plus button
  } else {
    add_btn.classList.remove("active"); //else dont activate plus button
  }
}
//function to add player name to li tag and show it to user
function show() {
  let newlitag = "";
  if (user_player_arr.length == players_total) {
    document.querySelector(".add_player_msg").innerHTML = "Team Members Full -> Ready to Play";
    document.querySelector(".add_player_submit_button_div").innerHTML = "<button type='button' id='add_player_submit_button'>Continue</button>";
  } else {
    let remaining_members = players_total - (user_player_arr.length);
    document.querySelector(".indicator-add-player").innerHTML = `<span class='add_player_msg'>Add <span class='remplayer'>${remaining_members}</span> more players in your team</span>`;
    document.querySelector(".add_player_submit_button_div").innerHTML = "";
  }
  user_player_arr.forEach((element, index) => {
    newlitag += `<li>${element}<span class="align-up" onclick="up(${index})"><i class="fas fa-caret-up up"></i></span><span onclick="down(${index})"><i class="fas fa-caret-down down"></i></span><span onclick="deleteplayer(${index})" ><i class='fas fa-trash bin'></i></span></li>`;
  });
  playerlist.innerHTML = newlitag;
  inputbox.value = "";
  add_btn.classList.remove("active");
}
//delete player name
function deleteplayer(index) {
  user_player_arr.splice(index, 1);
  show();
}
//go 1 index up player name
function up(index) {
  if (user_player_arr.length > 1 && index > 0) {
    let up_player = user_player_arr.splice(index, 1);
    let down_player = user_player_arr.splice(index - 1, 1);
    let temp;
    temp = up_player[0];
    up_player[0] = down_player[0];
    down_player[0] = temp;
    user_player_arr.splice(index - 1, 0, down_player[0], up_player[0]);
    show();
  }
}
//go 1 index down player name
function down(index) {
  if (user_player_arr.length > 1 && index < ((user_player_arr.length) - 1)) {
    let up_player = user_player_arr.splice(index + 1, 1);
    let down_player = user_player_arr.splice(index, 1);
    let temp;
    temp = up_player[0];
    up_player[0] = down_player[0];
    down_player[0] = temp;
    user_player_arr.splice(index, 0, down_player[0], up_player[0]);
    show();
  }
}
// do on clicking add button
add_btn.addEventListener('click', pushplayer);

function pushplayer() {
  let player = inputbox.value;
  user_player_arr.push(player);
  show();
}
// Hand Cricket Functionalities
function user_strike_init() {
  up_name_1_span.innerHTML = player_user_name[0];
  up_name_2_span.innerHTML = player_user_name[1];
}

function comp_strike_init() {
  cp_name_1_span.innerHTML = player_comp_name[0];
  cp_name_2_span.innerHTML = player_comp_name[1];
}

function user_strike_visible() {
  place_user_1.style.visibility = "visible";
  place_user_2.style.visibility = "visible";
}

function comp_strike_invisible() {
  place_comp_1.style.visibility = "hidden";
  place_comp_2.style.visibility = "hidden";
}

function comp_strike_visible() {
  place_comp_1.style.visibility = "visible";
  place_comp_2.style.visibility = "visible";
}

function user_strike_invisible() {
  place_user_1.style.visibility = "hidden";
  place_user_2.style.visibility = "hidden";
}
var priority;

function strike_html_change(wicket_common, on_strike_index) {
  if (who_is_batting_now == "user") {
    priority = 1;
    for (j = 0; j <= wicket_common + 1; j++) {
      if (player_user_status[j] == "not out") {
        if (priority % 2 != 0) {
          up_name_1_span.innerHTML = player_user_name[j];
          up_run_1_span.innerHTML = player_user_runs[j];
          up_ball_1_span.innerHTML = player_user_balls[j];
          if (on_strike_index == j) {
            console.log("add");
            place_user_1.classList.add("color-now");
            arrow_user_1.classList.remove("invis");
          } else {
            console.log("remove");
            place_user_1.classList.remove("color-now");
            arrow_user_1.classList.add("invis");
          }
        } else if (priority % 2 == 0) {
          if (wicket_common == total_wickets) {
            up_name_2_span.innerHTML = "";
            up_run_2_span.innerHTML = "";
            up_ball_2_span.innerHTML = "";

          } else {
            up_name_2_span.innerHTML = player_user_name[j];
            up_run_2_span.innerHTML = player_user_runs[j];
            up_ball_2_span.innerHTML = player_user_balls[j];
            if (on_strike_index == j) {
              place_user_2.classList.add("color-now");
              arrow_user_2.classList.remove("invis");
            } else {
              place_user_2.classList.remove("color-now");
              arrow_user_2.classList.add("invis");
            }
          }
        }
        priority++;
      }
    }
  } else if (who_is_batting_now == "computer") {
    {
      priority = 1;
      for (j = 0; j <= wicket_common + 1; j++) {
        if (player_comp_status[j] == "not out") {
          if (priority % 2 != 0) {
            cp_name_1_span.innerHTML = player_comp_name[j];
            cp_run_1_span.innerHTML = player_comp_runs[j];
            cp_ball_1_span.innerHTML = player_comp_balls[j];
            if (on_strike_index == j) {
              place_comp_1.classList.add("color-now");
              arrow_comp_1.classList.remove("invis");
            } else {
              place_comp_1.classList.remove("color-now");
              arrow_comp_1.classList.add("invis");
            }
          } else if (priority % 2 == 0) {
            if (wicket_common == total_wickets) {
              cp_name_2_span.innerHTML = "";
              cp_run_2_span.innerHTML = "";
              cp_ball_2_span.innerHTML = "";

            } else {
              cp_name_2_span.innerHTML = player_comp_name[j];
              cp_run_2_span.innerHTML = player_comp_runs[j];
              cp_ball_2_span.innerHTML = player_comp_balls[j];
              if (on_strike_index == j) {
                place_comp_2.classList.add("color-now");
                arrow_comp_2.classList.remove("invis");
              } else {
                place_comp_2.classList.remove("color-now");
                arrow_comp_2.classList.add("invis");
              }
            }

          }
          priority++;
        }
      }
    }
  }
}

function user_stautus_initial() {
  player_user_status[0] = "not out";
  player_user_status[1] = "not out";
}

function comp_stautus_initial() {
  player_comp_status[0] = "not out";
  player_comp_status[1] = "not out";
}
// Rseult div modifying fn
function output_result(common_score, wicket_common, ball_common, user_toss) {
  [batting, bowling] = decider();
  if (common_score >= target) {
    result.innerHTML = bowling + " won by " + (total_wickets - wicket_common) + " wicket and " + ((total_overs * 6) - ball_common) + " balls to spare";
  } else if ((common_score < target - 1) && (wicket_common == total_wickets || ball_common == (total_overs * 6))) {

    result.innerHTML = batting + " Won by " + (target - common_score - 1) + " runs";
  } else if ((common_score == target - 1) && (wicket_common == total_wickets || ball_common == (total_overs * 6))) {
    result.innerHTML = "Match Draw";
  } else {
    result.innerHTML = bowling + " needs " + (target - common_score) + " runs in " + ((total_overs * 6) - ball_common) + " balls";
  }
}
// Reqd Rate
function reqd_rate(score, ball, target, wicket_common, common_score) {
  req_return = ((target - score) * 6) / ((total_overs * 6) - ball);
  if (user_toss == "bat") {
    if ((score < target) && (wicket_common == total_wickets || ball == (total_overs * 6))) {
      reqd_comp_span.innerHTML = "-";
    } else if (common_score >= target) {
      reqd_comp_span.innerHTML = "0";
    } else {
      reqd_comp_span.innerHTML = req_return.toFixed(2);
    }
  } else if (user_toss == "bowl") {
    if ((score < target) && (wicket_common == total_wickets || ball == (total_overs * 6))) {
      reqd_user_span.innerHTML = "-";
    } else if (common_score >= target) {
      reqd_user_span.innerHTML = "0";
    } else {
      reqd_user_span.innerHTML = req_return.toFixed(2);
    }
  }

}

function decider() {
  if (user_toss == "bat") {
    batting = teamname;
    bowling = "Computer";
  } else {
    bowling = teamname;
    batting = "Computer";
  }
  return [batting, bowling];
}
//INDICATOR CHANGE
function indicator_change(wicket_common, ball_common) {
  [batting, bowling] = decider();
  if ((wicket_common == total_wickets || ball_common === (total_overs * 6)) && (user_toss == "bat")) {
    comp_does_span.innerHTML = "Batting";
    user_does_span.innerHTML = "Bowling";
    result.innerHTML = "Target for " + bowling + " --> " + target;
  } else if ((wicket_common == total_wickets || ball_common === (total_overs * 6)) && (user_toss == "bowl")) {
    user_does_span.innerHTML = "Batting";
    comp_does_span.innerHTML = "Bowling";
    result.innerHTML = "Target for " + bowling + " --> " + target;
  }
}
// projected
function proj_score(score, balls_played) {
  projected = (total_overs * 6 * score) / balls_played;
  projected = projected.toFixed(0);
  result.innerHTML = "Projected score --> " + projected;
}
//Display of choice computer and user (common)
function display_change_show(user_inp, comp_inp) {
  document.getElementById("user-disp").src = img[user_inp];
  document.getElementById("comp-disp").src = img[comp_inp];
}

function changehtml() {
  for (i = 0; i < 2; i++) {
    user_score_span[i].innerHTML = user_score;
    user_over_span[i].innerHTML = over_finished_user;
    user_wickets_span[i].innerHTML = wicket_user;
    comp_score_span[i].innerHTML = comp_score;
    comp_over_span[i].innerHTML = over_finished_comp;
    comp_wickets_span[i].innerHTML = wicket_comp;
  }
  runrate_user_span.innerHTML = runrate_user.toFixed(2);
  runrate_comp_span.innerHTML = runrate_comp.toFixed(2);
}
//STRINKE CHANGING BATSMANS INDEX (COMMON)
var temp;

function runrate(score, ball, prev_over, extra_ball, wickets_common, total_wickets) {
  if (wickets_common == total_wickets) {
    ball = total_overs * 6;
  }
  if (ball % 6 == 0) {
    rr_return = ((score) / (ball / 6));
    return rr_return;
  } else {
    rr_return = ((score) / ((prev_over) + (extra_ball / 6)));
    return rr_return;
  }
}
var temp1;

function strike_changer(common_run, common_ball, on_strike_index, non_strike_index, wicket_common, balls_played) {
  if (common_run == common_ball) //changing strike while wicket fall
  {
    if (balls_played % 6 == 0) {
      on_strike_index = non_strike_index;
      non_strike_index = (wicket_common + 1);
    } else {
      on_strike_index = (wicket_common + 1);
    }
  } else {
    if (common_run % 2 != 0) //1,3,5
    {
      temp1 = on_strike_index;
      on_strike_index = non_strike_index;
      non_strike_index = temp1;
    }
    if (balls_played % 6 == 0) {
      temp1 = on_strike_index;
      on_strike_index = non_strike_index;
      non_strike_index = temp1;
    }
    console.log(on_strike_index);
  }
  return [on_strike_index, non_strike_index];
}
//status status_changer
function status_changer(on_strike_index, run, ball, wicket_common) {
  if (run == ball) {
    if (who_is_batting_now == "user") {
      player_user_status[on_strike_index] = "out";
      player_user_status[wicket_common + 1] = "not out";
    } else if (who_is_batting_now == "computer") {
      player_comp_status[on_strike_index] = "out";
      player_comp_status[wicket_common + 1] = "not out";
    }
  }

}
//BALL CALCULATION (COMMON)
function ball_calculator(ball_common, prev_over_common, over_finished_common, extra_ball_common) {
  if (ball_common % 6 == 0) {
    prev_over_common = ball_common / 6;
    over_finished_common = prev_over_common;
  } else {
    extra_ball_common = ball_common % 6;
    over_finished_common = (prev_over_common) + (extra_ball_common / 10);
  }
  return [prev_over_common, over_finished_common, extra_ball_common];
}
// Wicket and Run adder
function run_calculator(common_run, common_ball, common_score, wicket_common) {
  if (common_run === common_ball) {
    wicket_common++;
  } else {
    common_score += common_run;
  }
  return [common_score, wicket_common];
}
//PLAYERS SCORECARD FOR BATTING AND BOWLING (COMMON)
function batting_scorecard(on_strike_index, non_strike_index, common_run, common_ball) {
  if (common_run != common_ball) {
    if (who_is_batting_now == "computer") {
      player_comp_runs[on_strike_index] += common_run; //increase runs for on strike batsman
    } else if (who_is_batting_now = "user") {
      player_user_runs[on_strike_index] += common_run;
    }
  }
  if (who_is_batting_now == "computer") {
    player_comp_balls[on_strike_index] += 1; //increase one ball for on strike batsman
  } else if (who_is_batting_now = "user") {
    player_user_balls[on_strike_index] += 1;
  }

}

function score_board_add() {
user_name_change[1].innerHTML=teamname;
  if (who_is_batting_now == "user") {
    user_score_card.innerHTML = `<tr>
      <td>Batting</td>
      <td>Runs</td>
      <td>Balls</td>
    </tr>`;
    for (i = 0; i <= total_wickets; i++) {
      if ((player_user_status[i] == "not out") || (player_user_status[i] == "out")) {
        user_score_card.innerHTML += `<tr>
          <td>
            <p>${player_user_name[i]}</p>
            <small>${player_user_status[i]}</small>
          </td>
          <td>${player_user_runs[i]}</td>
          <td>${player_user_balls[i]}</td>
        </tr>`;
      }
    }

  } else if (who_is_batting_now == "computer") {
    comp_score_card.innerHTML = `<tr>
      <td>Batting</td>
      <td>Runs</td>
      <td>Balls</td>
    </tr>`;
      for (i = 0; i <= total_wickets; i++) {
        if ((player_comp_status[i] == "not out") || (player_comp_status[i] == "out")) {
          comp_score_card.innerHTML += `<tr>
            <td>
              <p>${player_comp_name[i]}</p>
              <small>${player_comp_status[i]}</small>
            </td>
            <td>${player_comp_runs[i]}</td>
            <td>${player_comp_balls[i]}</td>
          </tr>`;
        }
      }
  }
}
//USER BATTING
function user_bat(user_run, comp_ball) {
  who_is_batting_now = "user";
  ball_user++;
  batting_scorecard(on_strike_index_user, non_strike_index_user, user_run, comp_ball);
  [user_score, wicket_user] = run_calculator(user_run, comp_ball, user_score, wicket_user);
  [prev_over_user, over_finished_user, extra_ball_user] = ball_calculator(ball_user, prev_over_user, over_finished_user, extra_ball_user);
  status_changer(on_strike_index_user, user_run, comp_ball, wicket_user);
  runrate_user = runrate(user_score, ball_user, prev_over_user, extra_ball_user, wicket_user, total_wickets);
  [on_strike_index_user, non_strike_index_user] = strike_changer(user_run, comp_ball, on_strike_index_user, non_strike_index_user, wicket_user, ball_user);
  changehtml();
  strike_html_change(wicket_user, on_strike_index_user);
  display_change_show(user_run, comp_ball);
  score_board_add();
  if (user_toss == "bat") {
    target = user_score + 1;
    proj_score(user_score, ball_user);
    indicator_change(wicket_user, ball_user);
    if (wicket_user == total_wickets || ball_user == (total_overs * 6)) {
      comp_stautus_initial();
      comp_strike_visible();
      user_strike_invisible();
      comp_strike_init();
    }
  } else if (user_toss == "bowl") {
    reqd_rate(user_score, ball_user, target, wicket_user, user_score);
    output_result(user_score, wicket_user, ball_user, who_is_batting_now);
  }

}

function comp_bat(user_ball, comp_run) {
  who_is_batting_now = "computer";
  ball_comp++;
  batting_scorecard(on_strike_index_comp, non_strike_index_comp, comp_run, user_ball);
  [comp_score, wicket_comp] = run_calculator(comp_run, user_ball, comp_score, wicket_comp);
  [prev_over_comp, over_finished_comp, extra_ball_comp] = ball_calculator(ball_comp, prev_over_comp, over_finished_comp, extra_ball_comp);
  status_changer(on_strike_index_comp, comp_run, user_ball, wicket_comp);
  runrate_comp = runrate(comp_score, ball_comp, prev_over_comp, extra_ball_comp, wicket_comp, total_wickets);
  [on_strike_index_comp, non_strike_index_comp] = strike_changer(comp_run, user_ball, on_strike_index_comp, non_strike_index_comp, wicket_comp, ball_comp);
  changehtml();
  strike_html_change(wicket_comp, on_strike_index_comp);
  display_change_show(user_ball, comp_run);
  score_board_add();
  if (user_toss == "bowl") {
    target = comp_score + 1;
    proj_score(comp_score, ball_comp);
    indicator_change(wicket_comp, ball_comp);
    if (wicket_comp == total_wickets || ball_comp == (total_overs * 6)) {
      user_stautus_initial();
      user_strike_visible();
      comp_strike_invisible();
      user_strike_init();
    }
  } else if (user_toss = "bat") {
    console.log("uff");
    reqd_rate(comp_score, ball_comp, target, wicket_comp, comp_score);
    output_result(comp_score, wicket_comp, ball_comp, who_is_batting_now);
  }
}
//comp choice get
function comp_choice_get() {
  const choices = [0, 1, 2, 3, 4, 6];
  var rand_comp_choice = Math.floor(Math.random() * 6);
  return choices[rand_comp_choice];
}

// Function which switches batting and bowling called by event list
function evaluate(user_click) {
  comp_click = comp_choice_get();
  if (user_toss == "bat") {
    if (wicket_user < total_wickets && ball_user < (total_overs * 6)) { //user will bat until wickets or balls are over
      user_bat(user_click, comp_click);
    } else if (wicket_comp < total_wickets && comp_score < target && ball_comp < (total_overs * 6)) { //comp will bat until target or wicket or balls over
      comp_bat(user_click, comp_click);
    }
  } else {
    if (wicket_comp < total_wickets && ball_comp < (total_overs * 6)) {
      comp_bat(user_click, comp_click);
    } else if (wicket_user < total_wickets && user_score < target && ball_user < (total_overs * 6)) {
      user_bat(user_click, comp_click);
    }
  }
}
// Event Listner on touch hands
zero_div.addEventListener('click', function() {
  evaluate(0);
})
one_div.addEventListener('click', function() {
  evaluate(1);
})
two_div.addEventListener('click', function() {
  evaluate(2);
})
three_div.addEventListener('click', function() {
  evaluate(3);
})
four_div.addEventListener('click', function() {
  evaluate(4);
})
six_div.addEventListener('click', function() {
  evaluate(6);
})
// Initialize details when page-3 loads up
function take_details_02() {
  player_user_name = user_player_arr.slice(); //copying..transfer
  total_overs_span[0].innerHTML = total_overs; //changing innerhtml of total overs to user's choice
  total_overs_span[1].innerHTML = total_overs;
  for (i = 0; i <= total_wickets; i++) {
    player_comp_runs[i] = 0;
    player_user_runs[i] = 0;
    player_user_balls[i] = 0;
    player_comp_balls[i] = 0;
    player_comp_status[i] = "did not Bat";
    player_user_status[i] = "did not Bat";
  }
  if (user_toss === "bat") {
    comp_does_span.innerHTML = "Bowling";
    user_does_span.innerHTML = "Batting";
    user_job.innerHTML = "1st";
    comp_job.innerHTML = "2nd";
    user_stautus_initial();
    user_strike_visible();
    user_strike_init();
  } else if (user_toss === "bowl") {
    comp_does_span.innerHTML = "Batting";
    user_does_span.innerHTML = "Bowling";
    user_job.innerHTML = "2nd";
    comp_job.innerHTML = "1st";
    comp_stautus_initial();
    comp_strike_visible();
    comp_strike_init()
  }
  user_name_change[0].innerHTML =teamname;

}

view_score_btn.addEventListener('click', function() {
  page_4_score_card.style.display = "flex";
});
cancel_scoreboard.addEventListener('click',function()
{
  page_4_score_card.style.display="none";
})
// ON CLICKING POPUP GAME I.E PAGE-03
function page3_activate() {
  page_3.style.visibility = "visible"; //PAGE 3 BECOMES VISIBLE
  take_details_02();
}
document.body.addEventListener('click', function(event) { //DYNAMICALLY ADDING EVENT LISTENER
  if (event.target.id == 'add_player_submit_button') {
    page3_activate(); //CALL PAGE 3 TO ACTIVATE
  };
});

function take_details_01() {
  players_total = document.getElementById("players_total").value;
  teamname = document.getElementById("teamname").value;
  total_overs = document.getElementById("overs").value;
  user_toss = document.getElementById("toss").value;
  total_wickets = players_total - 1;
  remplayer.innerHTML = players_total - (user_player_arr.length); //this is some kinda diff to change view of page_02
}
// on clicking popup the add player page
match_details_submit.addEventListener('click', function(event) {
  event.preventDefault()
  whole_add_player.style.visibility = "visible";
  take_details_01();
})
