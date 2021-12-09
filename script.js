function ploting(){
  d3.select('#firstPlot').append("p").text("Testing").attr("class","text-white text-center");
  d3.select('#firstPlot').append('table').attr("class",'table table-bordered')
      .append('thead').append('tr').attr('id','tab-head');

}
