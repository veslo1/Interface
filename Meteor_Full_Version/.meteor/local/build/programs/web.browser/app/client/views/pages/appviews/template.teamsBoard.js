(function(){
Template.__checkName("teamsBoard");
Template["teamsBoard"] = new Template("Template.teamsBoard", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Teams board"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <span class="label label-primary pull-right">NEW</span>\n                        <h5>IT-01 - Design Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a1.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a2.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a3.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a5.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a6.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            It is a long established fact that a reader will be distracted by the readable content\n                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">48%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 48%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                12\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                4th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $200,913 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-04 - Marketing Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a5.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a6.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">32%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 32%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                24\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                3th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $190,325 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-07 - Finance Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">73%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 73%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                11\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                6th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $560,105 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-02 - Developers Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a1.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">61%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 61%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                43\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                1th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $705,913 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <span class="label label-warning pull-right">DEADLINE</span>\n                        <h5>IT-05 - Administration Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a1.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a2.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a6.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a3.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">14%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 14%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                8\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                7th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $40,200 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-08 - Lorem ipsum Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a1.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a3.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their. ometimes by accident, sometimes on purpose (injected humour and the like).\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">25%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 25%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                25\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                4th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $140,105 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-title">\n\n                        <h5>IT-02 - Graphic Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a3.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a2.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">82%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 82%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                68\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                2th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $701,400 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-06 - Standard  Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a1.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a2.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a4.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">26%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 26%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                16\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                8th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $160,100 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>IT-09 - Modern Team</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <div class="team-members">\n                            <a href="#"><img alt="member" class="img-circle" src="img/a2.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a3.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a8.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a6.jpg"></a>\n                            <a href="#"><img alt="member" class="img-circle" src="img/a7.jpg"></a>\n                        </div>\n                        <h4>Info about Design Team</h4>\n                        <p>\n                            Words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in.\n                        </p>\n                        <div>\n                            <span>Status of current project:</span>\n                            <div class="stat-percent">18%</div>\n                            <div class="progress progress-mini">\n                                <div style="width: 18%;" class="progress-bar"></div>\n                            </div>\n                        </div>\n                        <div class="row  m-t-sm">\n                            <div class="col-sm-4">\n                                <div class="font-bold">PROJECTS</div>\n                                53\n                            </div>\n                            <div class="col-sm-4">\n                                <div class="font-bold">RANKING</div>\n                                9th\n                            </div>\n                            <div class="col-sm-4 text-right">\n                                <div class="font-bold">BUDGET</div>\n                                $60,140 <i class="fa fa-level-up text-navy"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>') ];
}));

}).call(this);