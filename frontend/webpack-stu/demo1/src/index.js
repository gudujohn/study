import $ from 'jquery'

// npm i style-loader css-loader -D
import './css/index.css'
// npm i style-loader css-loader less-loader less -D
import './css/index.less'
// npm i style-loader css-loader sass-loader node-sass -D
import './css/index.scss'

$(function() {
    $('li:odd').css('backgroundColor', 'grey')
    $('li:even').css('backgroundColor', function() {
      return '#' + 'D97634'
    })
})