import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Haiku} from './../js/haiku.js';

$(document).ready(function() {
  let randomWords = require('random-words');
  $("#haiku-form").submit(function(event){
    event.preventDefault();
    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val()
    let lineThree = $("#lineThree").val()

    let newHaiku = new Haiku(lineOne, lineTwo, lineThree);

    if (newHaiku.syllableCounter(newHaiku.lineOne) !== 5 || newHaiku.syllableCounter(newHaiku.lineTwo) !== 7 || newHaiku.syllableCounter(newHaiku.lineThree) !== 5){
      $("#lineOneTotal").text(newHaiku.syllableCounter(newHaiku.lineOne));
      $("#lineTwoTotal").text(newHaiku.syllableCounter(newHaiku.lineTwo));
      $("#lineThreeTotal").text(newHaiku.syllableCounter(newHaiku.lineThree));
      $("#vowelCount").show();
    }else{
      $("#haiku").show();
    }

    $("#createHaiku").click(function()
    {
      $("#generateLineOne").text(newHaiku.RandomWordGenerator(5));
      $("#generateLineTwo").text(newHaiku.RandomWordGenerator(7));
      $("#generateLineThree").text(newHaiku.RandomWordGenerator(5));
      $("#haikuGenerator").show();
    });

    $(".reset").click(function()
    {
      $("#lineOne").val("");
      $("#lineTwo").val("");
      $("#lineThree").val("");
      $("#haiku").hide();
      $("#vowelCount").hide();
      $("#haikuGenerator").hide();
    });
  });



});
