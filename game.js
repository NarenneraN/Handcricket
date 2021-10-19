user_team=[];
comp_team=[];
user_players_name=[];
players_total=11;
bat_team='user';//user or comp
var user_over_finished=0,user_ongoing_balls=0,comp_over_finished=0,comp_ongoing_balls=0;
var user ={
  runs : 0,
  balls : 0 ,
  overs:0,
  wickets_gone : 0
}
var comp = {
  runs : 0,
  balls : 0 ,
  overs:0,
  wickets_gone : 0
}
var over_run=0;
var ball_timeline_arr=["","","","","",""];
var ball_timeline_span = document.querySelectorAll(".ball_timeline");
var batting_team_live_score = document.querySelector(".batting_team_live_score");
var batting_team_live_wickets = document.querySelector(".batting_team_live_wickets");
var batting_team_live_overs = document.querySelector(".batting_team_live_overs");
var player_select_section=document.querySelector(".player_select_section");
var comp_players = [
  {
  name:"Dhawan",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
  status:"DNB",//DNB,OUT,NOT OUT
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
  {
  name:"Rohit Sharma",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
    status:"DNB",
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
  {
  name:"Virat Kohli",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
    status:"DNB",
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
{
name:"Suryakumar",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"KL Rahul",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Rishabh",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Hardik",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Jadeja",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Chahal",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Shami",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Bumrah",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
}
]
var user_players = [
  {
  name:"Dhawan",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
  status:"DNB",//DNB,OUT,NOT OUT
  strike:"no",
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
  {
  name:"Rohit Sharma",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
    status:"DNB",
    strike:"no",
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
  {
  name:"Virat Kohli",
  runs:0,
  balls:0,
  sr:0,
  dismisal:"",
    status:"DNB",
    strike:"no",
  wickets:0,
  overs:0,
  runs_gave:0,
  balls_put:0
},
{
name:"Suryakumar",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"KL Rahul",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Rishabh",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Hardik",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Jadeja",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Chahal",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Shami",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
},
{
name:"Bumrah",
runs:0,
balls:0,
sr:0,
dismisal:"",
  status:"DNB",
  strike:"no",
wickets:0,
overs:0,
runs_gave:0,
balls_put:0
}
]
total_players=4;
var bowler_name=document.querySelector(".bowler_name");
var bowler_over = document.querySelector(".bowler_over");
var live_bowler_runs = document.querySelector(".live_bowler_runs");
var live_bowler_wickets = document.querySelector(".live_bowler_wickets");

var wicket_msg_runs=document.querySelector(".wicket_msg_runs");
var wicket_msg_balls=document.querySelector(".wicket_msg_balls");
var wicket_msg_name=document.querySelector(".wicket_msg_batsmen");
var wicket_msg_bowler=document.querySelector(".wicket_msg_bowler");

function load_players()
{
  user_players_name=JSON.parse(localStorage.user_players_name);
  user_players.splice(user_players_name.length,(11-user_players_name.length));
  comp_players.splice(user_players_name.length,(11-user_players_name.length));
  for(i=0;i<(user_players_name.length);i++)
  {
    user_players[i].name=user_players_name[i];
  }
  comp_bowling_index=comp_players.length-1;
  if(bat_team=="user")
  {
    display_all_players();
    select_another();
    bowler_name.innerHTML=comp_players[comp_bowling_index].name;
    bowler_over.innerHTML=(comp_players[comp_bowling_index].overs).toFixed(1);
    live_bowler_runs.innerHTML=comp_players[comp_bowling_index].runs_gave;
    live_bowler_wickets.innerHTML=comp_players[comp_bowling_index].wickets;
  }

}
function select_another()
{
  player_select_section.style.display="block";
  msg_changer();

}
//Randomizing Computer Choices
function comp_random()
{
  if(bat_team=="user")
  {
    const choices = [ 1, 2, 3, 4, 6]; //While Bowling You Cant Put Zero
    var rand_comp_choice = Math.floor(Math.random() * 5);//range is 0 to 5
    return choices[rand_comp_choice]; // Random index generated
  }
  else if(bat_team=="comp")
  {
    const choices = [ 0, 1, 2, 3, 4, 6]; //While Batting You Can Put Zero
    var rand_comp_choice = Math.floor(Math.random() * 6);//range is 0 to 6
    return choices[rand_comp_choice]; // Random index generated
  }

}
//Updating User Html getElementsByClassName
function update_user_bat()
{
batting_team_live_score.innerHTML=user.runs;
batting_team_live_wickets.innerHTML=user.wickets_gone;
batting_team_live_overs.innerHTML=user.overs;
}

//Over to ball
function over_2_ball(balls,overs_finished,ongoing_balls,overs) {
  if(balls%6==0 && balls>5)
  {
    overs_finished++;
    overs_done.push(overs_finished);
    over_per_run_array.push(over_run);
    over_run=0;
      updatechart();
  }
  ongoing_balls=balls-(overs_finished*6);
  overs=overs_finished + "." +ongoing_balls;
  return [overs_finished,ongoing_balls,overs];
}
// Run Add
function add_runs(runs,bat_choice,ball_choice,balls,wickets)
{
  balls++;
  if(bat_choice!=ball_choice)
  {
    over_run+=bat_choice;
    runs+=bat_choice;
  }
  else
  {
    wickets++;
  }
  return [runs,balls,wickets];
}
function update_ball_time_line(runs,overs,finished_over,ongoing_balls,ball)
{
  console.log(ongoing_balls);
  if(runs==ball)
  {
   ball_timeline_arr[ongoing_balls]="W";
  }

  else
  {
    ball_timeline_arr[ongoing_balls]=runs;
  }
  for(i=0;i<6;i++)
  {
    ball_timeline_span[i].innerHTML=ball_timeline_arr[i];
    ball_timeline_span[i+6].innerHTML=ball_timeline_arr[i];
  }
  if(ongoing_balls==5)
  {

    for(i=0;i<6;i++)
    {
      ball_timeline_arr[i]="";
    }
  }
}
function bowl_comp(bat,ball)
{
  if(bat==ball)
  {
    comp_players[comp_bowling_index].wickets++;
  }
  else{
    comp_players[comp_bowling_index].runs_gave+=bat;
  }
  comp_players[comp_bowling_index].balls_put++;
  comp_players[comp_bowling_index].overs=Math.floor(comp_players[comp_bowling_index].balls_put/6) + 0.1*(comp_players[comp_bowling_index].balls_put%6);
  bowler_name.innerHTML=comp_players[comp_bowling_index].name;
bowler_over.innerHTML=(comp_players[comp_bowling_index].overs).toFixed(1);
  live_bowler_runs.innerHTML=comp_players[comp_bowling_index].runs_gave;
  live_bowler_wickets.innerHTML=comp_players[comp_bowling_index].wickets;
if(user_ongoing_balls==0)
{
  if(comp_bowling_index==0){
    comp_bowling_index=comp_players.length-1;
  }
  else{
    comp_bowling_index--;
  }


}

}
var p1_live_score=document.querySelectorAll(".p1_live_score");
var p1_live_name=document.querySelectorAll(".p1_live_name");
var p1_live_balls=document.querySelectorAll(".p1_live_balls");
var p2_live_score=document.querySelectorAll(".p2_live_score");
var p2_live_balls=document.querySelectorAll(".p2_live_balls");
var p2_live_name=document.querySelectorAll(".p2_live_name");
function change_strike(bat,ball)
{
  if(bat_team=="user")
  {

    user_players[striker_index].balls++;
    if(bat==ball)
    {
      last_user_wicket_index=striker_index;
      user_players[striker_index].status="OUT";
      user_players[striker_index].strike="no";
      user_players[striker_index].dismisal="b  "+comp_players[comp_bowling_index].name;
    }
    else {
      user_players[striker_index].runs+=bat;

      if(bat==1||bat==3)
      {
        if(user_ongoing_balls!=0)
        {
          temp=striker_index;
          striker_index=non_striker_index;
          non_striker_index=temp;
        }

      }
      else
      {
        if(user_ongoing_balls==0)
        {
          temp=striker_index;
          striker_index=non_striker_index;
          non_striker_index=temp;
        }


      }
    }
      completed=0;
    for(i=0;i<batted_index.length;i++)
    {
j=batted_index[i];
      if(user_players[j].status=="NOT OUT")
      {
        console.log(completed);
        if(completed==0)
        {
          for(k=0;k<2;k++)
          {
            p1_live_score[k].innerHTML=user_players[j].runs;
            p1_live_name[k].innerHTML=user_players[j].name;
            p1_live_balls[k].innerHTML=user_players[j].balls;
          }

        }
        if(completed==1)
        {
          for(k=0;k<2;k++)
          {
            p2_live_score[k].innerHTML=user_players[j].runs;
            p2_live_name[k].innerHTML=user_players[j].name;
            p2_live_balls[k].innerHTML=user_players[j].balls;
          }
        }
        completed++;
      }

    }
    completed=0;
  //Change the strike

}
}
function refresh_second_place()
{
  completed=0;
for(i=0;i<batted_index.length;i++)
{
j=batted_index[i];
  if(user_players[j].status=="NOT OUT")
  {
    console.log(completed);
    if(completed==0)
    {
      for(k=0;k<2;k++)
      {
        p1_live_score[k].innerHTML=user_players[j].runs;
        p1_live_name[k].innerHTML=user_players[j].name;
        p1_live_balls[k].innerHTML=user_players[j].balls;
      }
    }
    if(completed==1)
    {
      for(k=0;k<2;k++)
      {
        p2_live_score[k].innerHTML=user_players[j].runs;
        p2_live_name[k].innerHTML=user_players[j].name;
        p2_live_balls[k].innerHTML=user_players[j].balls;
      }
    }
    completed++;
  }

}
completed=0;

}
var wicket_wrong=document.querySelector(".wicket_wrong");
var wicket_gone_pop_up=document.querySelector(".wicket_gone_pop_up");
function activate(user_choice)
{
  comp_choice=comp_random();
  if(bat_team=="user")
  {
    update_ball_time_line(user_choice,user.overs,user_over_finished,user_ongoing_balls,comp_choice);
[user.runs,user.balls,user.wickets_gone]=add_runs(user.runs,user_choice,comp_choice,user.balls,user.wickets_gone);

    [user_over_finished,user_ongoing_balls,user.overs]= over_2_ball(user.balls,user_over_finished,user_ongoing_balls,user.overs);


    update_user_bat();
    // Strike_changer
    change_strike(user_choice,comp_choice);
    //Bowling Computer
      bowl_comp(user_choice,comp_choice);

    //Last select another player
    if(user_choice==comp_choice)
    {
      wicket_msg_name.innerHTML=user_players[last_user_wicket_index].name;
      wicket_msg_runs.innerHTML=user_players[last_user_wicket_index].runs;
      wicket_msg_balls.innerHTML=user_players[last_user_wicket_index].balls;
      wicket_msg_bowler.innerHTML=user_players[last_user_wicket_index].dismisal;
      wicket_gone_pop_up.style.display="flex";
    }
  }
  else if(bat_team=="comp")
  {
  [comp.runs,comp.balls,comp.wickets_gone]=add_runs(comp.runs,comp_choice,user_choice,comp.balls,comp.wickets_gone);
  }
}

function close_wicket(){
  wicket_gone_pop_up.style.display="none";
  //Next Person To Walk Out
  select_another();
}
