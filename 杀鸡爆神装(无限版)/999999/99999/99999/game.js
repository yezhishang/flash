﻿/**
 * 杀鸡爆神装(无限版)
 */
let IMAGE = require('./image.js');
let UTILS = require('./utils.js');

const 游戏包名 = "com.game456.sjbsz";
const 游戏名称 = "杀鸡爆神装(无限版)";
let gameId = 99999; //542018;
let auxiliaryId = 999;
let version = 999;
//指定文件路径"./sdcard/                                    脚本/游戏ID/脚本ID/版本ID/config.json";
let filePath = "/storage/emulated/0/sdcard/脚本/" + gameId + "/" + auxiliaryId + "/" + version + "/config.json";
let 是否执行新手任务 = true;
let 是否打BOSS任务 = true;
let 是否打副本任务 = true;
let 是否打竞技任务 = true;
var 是否领取VIP = false;
let 通用休眠时间 = 1000;
let main = function () {
    this.init = () => {
        UTILS.log("start");
        sleep(1000);
        this.initEvents();
        sleep(1000);
        // if (UTILS.checkCurrentPackage(游戏包名)) {
        this.开始运行();
        // } else {
        //     UTILS.toastLog('请先运行游戏!')
        //     return;
        // }
        // this.initData(filePath);
        // sleep(1000)
    }
    //读取指定位置文件内容配置初始化数据
    this.initData = (path) => {
        if (!files.isFile(path)) {
            UTILS.log("指定配置文件不存在");
        } else {
            let res = files.read(path);
            if (!res) {
                UTILS.log("指定配置文件内容为空");
            } else {
                let res = JSON.parse(res)
                是否执行新手任务 = res.checkbox[0].checked;
                是否打BOSS任务 = res.checkbsox[1].checked;
                是否打副本任务 = res.checkbox[2].checked;
                是否打竞技任务 = res.checkbox[3].checked;
            }
        }
    }
    this.initEvents = () => {
        //检测无障碍模式开启情况
        auto.waitFor();
        //请求截图权限
        if (!requestScreenCapture()) {
            UTILS.toastLog("获取截图权限失败,中断操作");
            exit();
        }
        UTILS.setScreenMetrics();
        sleep(通用休眠时间);
    }

    this.开始运行 = () => {
        // var aa = UTILS.findImage(IMAGE.福利大厅,2,1,0.7);
        // var bb = UTILS.findImage(IMAGE.招财聚宝,2,2,0.7);
        // log(aa,bb)
        // // var 一键强化 = UTILS.findImage(IMAGE.锻造.一键强化,2,2,0.7);
        // // log(一键强化+'一键强化');
        // // sleep(通用休眠时间*2);
        // var 副本扫荡 = UTILS.findImage(IMAGE.其他.副本扫荡,2,2,0.7);
        // log(副本扫荡+'副本扫荡');
        // sleep(通用休眠时间*2);
        return;
        UTILS.toastLog('开始运行');
        sleep(3000);
        // this.VIP();
        // this.新手任务s();
        // this.日常任务();
        // sleep(3000);
        // this.升阶();
        // this.判断是否在主页();
        this.日常任务判断();
    }

    this.VIP = () => {
        var VIP = UTILS.findImage(IMAGE.VIP,0,0,0.7);
        log(VIP,'vip');
        sleep(通用休眠时间);
        if(VIP != null){
            UTILS.click(VIP.x,VIP.y);
            sleep(通用休眠时间);
            let VIP领取时间 = setInterval(() => {
                var vip领取 =   UTILS.findColorNoClick('#6A3F25',[[85,26,'#FBDD38'],[62,65,'#8D3B1E'],[87,14,'#8E7D20']],[0,UTILS.deviceHeight/2,UTILS.deviceWidth,UTILS.deviceHeight/2],20,0,0);       
                UTILS.log(vip领取+'vip领取');
                if(vip领取){
                    UTILS.click(vip领取.x,vip领取.y);
                }else{
                    clearInterval(VIP领取时间);
                    sleep(通用休眠时间);
                    UTILS.toastLog('VIP领取完毕');
                    sleep(通用休眠时间);
                    var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                    sleep(通用休眠时间);
                    UTILS.click(返回.x,返回.y);
                    sleep(通用休眠时间);
                    this.是否领取VIP = true;
                    sleep(通用休眠时间);
                    this.角色换装();
                }
            },通用休眠时间);
        }else{
            log(2222)
        }
    }
   
    this.角色换装 = () => {
        var 角色按钮 = UTILS.findImage(IMAGE.角色.角色按钮,1,2,0.7);
        if(角色按钮){
            UTILS.click(角色按钮.x,角色按钮.y);
            sleep(通用休眠时间);
            var 一键换装 = UTILS.findImage(IMAGE.角色.一键换装,2,1,0.7);
            log(一键换装);
            sleep(通用休眠时间);
            if(一键换装){
                UTILS.click(一键换装.x,一键换装.y);
            }
            sleep(通用休眠时间);
            var 玄珠激活 = UTILS.findImage(IMAGE.角色.玄珠激活,1,0,0.7);
            log(玄珠激活+'玄珠激活');
            sleep(通用休眠时间);
            if(玄珠激活){
                UTILS.click(玄珠激活.x,玄珠激活.y);
                sleep(通用休眠时间);
                var  玄珠提升时间 = setInterval(() => {
                    var 玄珠提升 = UTILS.findImage(IMAGE.角色.玄珠提升,2,1,0.7);
                    sleep(通用休眠时间);
                    var 是否提升 = UTILS.findColorNoClick('#CE220F',[[66,2,'#D5220F'],[60,21,'#962211']],[UTILS.deviceWidth/3,UTILS.deviceHeight/3*2,UTILS.deviceWidth/3,UTILS.deviceHeight/3],20,0,0);
                    log(是否提升+'是否提升')
                    if(是否提升){
                        sleep(通用休眠时间);
                        UTILS.click(玄珠提升.x,玄珠提升.y);
                    }else{
                        clearInterval(玄珠提升时间);
                        sleep(通用休眠时间);
                        UTILS.toastLog('材料不足');
                        var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                        sleep(通用休眠时间);
                        UTILS.click(返回.x,返回.y);
                    }
                },通用休眠时间)
            }
            sleep(通用休眠时间);
            var 神装 = UTILS.findImage(IMAGE.角色.神装,2,1,0.7);
            log(神装+'神装');
            sleep(通用休眠时间);
            if(神装){
                UTILS.click(神装.x,神装.y);
                sleep(通用休眠时间);
                var 神装合成按钮 = UTILS.findImage(IMAGE.角色.神装合成按钮,2,1,0.7);
                log(神装合成按钮+'神装合成按钮')
                sleep(通用休眠时间);
                var 获取橙装碎片 = UTILS.findImage(IMAGE.角色.获取橙装碎片,2,2,0.7);
                log(获取橙装碎片+'获取橙装碎片');
                if(获取橙装碎片){
                    sleep(通用休眠时间);
                    UTILS.click(获取橙装碎片.x+50,获取橙装碎片.y+30);
                    sleep(通用休眠时间);
                    var 分解橙装 = UTILS.findImage(IMAGE.角色.分解橙装,2,2,0.7);
                    sleep(通用休眠时间);
                    
                        let 分解时间 = setInterval(() => {
                            if(分解橙装){
                            UTILS.click(分解橙装.x,分解橙装.y);
                            sleep(通用休眠时间);
                            }else{
                                sleep(通用休眠时间);
                                clearInterval(分解时间);
                                sleep(通用休眠时间);
                                var 合成时间 = setInterval(() => { 
                                    var 神装合成 = UTILS.customAreaFindImageNoClick(IMAGE.角色.神装合成s,0,0,UTILS.deviceWidth,UTILS.deviceHeight/3*2,0.7);
                                    log(神装合成+'神装合成')
                                    sleep(通用休眠时间);
                                    if(神装合成){
                                        UTILS.click(神装合成.x,神装合成.y);
                                        sleep(通用休眠时间);
                                        UTILS.click(神装合成按钮.x+100,神装合成按钮.y+50);
                                    }else{
                                        sleep(通用休眠时间);
                                        clearInterval(合成时间);
                                        let 升级时间 = setInterval(() => {
                                            var 神装升级 = UTILS.customAreaFindImageNoClick(IMAGE.角色.神装升级s,0,0,UTILS.deviceWidth,UTILS.deviceHeight/3*2,0.7);
                                            log(神装升级+'神装升级')
                                            sleep(通用休眠时间);
                                            if(神装升级){
                                                UTILS.click(神装升级.x,神装升级.y);
                                                sleep(通用休眠时间);
                                                UTILS.click(神装合成按钮.x+100,神装合成按钮.y+50); 
                                            }else{
                                                sleep(通用休眠时间);
                                                clearInterval(升级时间); 
                                                sleep(通用休眠时间);
                                                UTILS.toastLog('没有橙装碎片了');
                                                sleep(通用休眠时间);
                                                var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                                                sleep(通用休眠时间);
                                                UTILS.click(返回.x,返回.y);
                                                sleep(通用休眠时间);
                                            }
                                        },通用休眠时间)
                                    }
                                },通用休眠时间)
                            }
                        },通用休眠时间)

                }
            }
            sleep(通用休眠时间);
            var 心法 = UTILS.findImage(IMAGE.角色.心法,1,2,0.7);
            log(心法+'心法');
            sleep(通用休眠时间);
            if(心法){
                sleep(通用休眠时间);
                UTILS.click(心法.x,心法.y);
                sleep(通用休眠时间);
                let 心法升级时间 = setInterval(() => {
                    var 心法升级按钮 = UTILS.findImage(IMAGE.角色.心法升级按钮,2,1,0.7);
                    sleep(通用休眠时间);
                    var 心法材料不足 = UTILS.findImage(IMAGE.角色.心法材料不足,2,1,0.7);
                    if(心法材料不足){
                        UTILS.click(心法升级按钮.x,心法升级按钮.y,200);
                        sleep(通用休眠时间);
                    }else{
                        clearInterval(心法升级时间);
                        sleep(通用休眠时间);
                        UTILS.toastLog('心法材料不足');
                        sleep(通用休眠时间);
                        // var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                        // sleep(通用休眠时间);
                        // UTILS.click(返回.x,返回.y);
                        // sleep(通用休眠时间);
                    }
                    
                },通用休眠时间)
            }
            sleep(通用休眠时间);
            var 兵法 = UTILS.findImage(IMAGE.角色.兵法,0,3,0.7);
            log(兵法+'兵法');
            sleep(通用休眠时间);
            if(兵法){
                sleep(通用休眠时间);
                UTILS.click(兵法.x,兵法.y);
                sleep(通用休眠时间);
                let 兵法升级时间 = setInterval(() => {
                    var 兵法升级按钮 = UTILS.findImage(IMAGE.角色.心法升级按钮,2,1,0.7);
                    sleep(通用休眠时间);
                    var 心法材料不足 = UTILS.findImage(IMAGE.角色.心法材料不足,2,1,0.7);
                    sleep(通用休眠时间);
                    if(心法材料不足){
                        UTILS.click(兵法升级按钮.x,兵法升级按钮.y,400);
                        sleep(通用休眠时间);
                    }else{
                        clearInterval(兵法升级时间);
                        sleep(通用休眠时间);
                        UTILS.toastLog('心法材料不足');
                        sleep(通用休眠时间);
                        // var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                        // sleep(通用休眠时间);
                        // UTILS.click(返回.x,返回.y);
                        // sleep(通用休眠时间);
                    }
                    
                },通用休眠时间)
            }
        }
    }


    this.升阶 = () => {
        var 升阶 = UTILS.findImage(IMAGE.升阶.升阶,1,2,0.7);
        sleep(通用休眠时间);
        log(升阶);
        sleep(通用休眠时间);
        if(升阶){
            sleep(通用休眠时间);
            click(升阶.x,升阶.y)
            sleep(通用休眠时间);
            
            let 提升时间 = setInterval(() => {
                var 是否提升 = UTILS.findColorNoClick('#0ECC13',[[10,8,'#0DC412'],[26,7,'#042104']],[760,1177,157,64],20);
                log(是否提升+' sleep(通用休眠时间);');
                sleep(通用休眠时间);
                var 坐骑丹提升 = UTILS.findImage(IMAGE.坐骑丹提升,2,2,0.7);
                sleep(通用休眠时间);
                if(是否提升){
                    UTILS.click(坐骑丹提升.x,坐骑丹提升.y);
                    sleep(通用休眠时间);
                }else{
                    clearInterval(提升时间);
                    
                }
            },通用休眠时间)
           
        }else{

        }
    }



    this.技能 = () => {
        sleep(通用休眠时间);
        var 技能 = UTILS.findImage(IMAGE.技能.技能,1,2,0.7);
        log(技能+'技能');
        sleep(通用休眠时间);
        if(技能){
            UTILS.click(技能.x,技能.y);
            sleep(通用休眠时间);
            var 一键升级 = UTILS.findImage(IMAGE.技能.一键升级,0,2,0.7);
            log(一键升级+'一键升级');
            sleep(通用休眠时间);
            if(一键升级){
                UTILS.click(技能.x,技能.y,200);
                sleep(通用休眠时间);
            }
        }
    }

    this.新手任务 = () => {
        sleep(通用休眠时间);
        // var 新手任务 = UTILS.findColorNoClick('#037108',[[22,5,'#06D910'],[17,9,'#037D09'],[51,18,'#037C09']],[0,UTILS.deviceHeight/2,UTILS.deviceWidth/2,200],20);
        var 新手任务 = UTILS.findColorNoClick('#037108',[[22,5,'#06D910'],[17,9,'#037D09'],[51,18,'#037C09']],[3,1198,383,103],20);
        log(新手任务);
        sleep(通用休眠时间);
        UTILS.click(新手任务.x,新手任务.y);
        sleep(通用休眠时间);
        var 角色按钮 = UTILS.findImage(IMAGE.角色.角色按钮,1,2,0.7);
        if(角色按钮){
            UTILS.click(角色按钮.x,角色按钮.y);
            sleep(通用休眠时间);
            var 一键换装 = UTILS.findImage(IMAGE.角色.一键换装,2,1,0.7);
            log(一键换装);
            sleep(通用休眠时间);
            if(一键换装){
                UTILS.click(一键换装.x,一键换装.y);
            }
            sleep(通用休眠时间);
        }
    }



    this.判断是否在主页 = () =>{
        var 邮箱 = UTILS.findImage(IMAGE.其他.邮箱,2,2,0.7);
        if(邮箱){
            UTILS.toastLog('回到主页了')
        }
    }


    this.新手任务s = () => {
        var 奖励时间 = setInterval(() => {
            var 奖励 = UTILS.findImage(IMAGE.其他.奖励,2,0,0.7);
            log(奖励+'奖励');
            sleep(通用休眠时间*2);
            var 邮箱 = UTILS.findImage(IMAGE.其他.邮箱,2,2,0.7);
            sleep(通用休眠时间*2);
            var 新手任务 = UTILS.findColorNoClick('#037108',[[22,5,'#06D910'],[17,9,'#037D09'],[51,18,'#037C09']],[3,1198,383,103],20);
            sleep(通用休眠时间*2);
            if(奖励 != null && 邮箱 != null){
                UTILS. click(奖励.x,奖励.y,200);
                sleep(通用休眠时间);
                var 一键换装 = UTILS.findImage(IMAGE.角色.一键换装,2,1,0.7);
                log(一键换装+'一键换装');
                sleep(通用休眠时间);
                var 熔炼 = UTILS.findImage(IMAGE.背包.熔炼,2,0,0.7);
                log(熔炼+'熔炼');
                sleep(通用休眠时间*2);
                var 美人领取 = UTILS.findImage(IMAGE.其他.领取,2,1,0.7);
                log(美人领取+'美人领取');
                sleep(通用休眠时间*2);
                var 美人提升 = UTILS.findImage(IMAGE.其他.美人提升,2,2,0.7);
                log(美人提升+'美人提升');
                sleep(通用休眠时间*2);
                var 首领挑战 = UTILS.findImage(IMAGE.其他.首领挑战,2,2,0.7);
                log(首领挑战+'首领挑战');
                sleep(通用休眠时间*2);
                var 活跃度领取 = UTILS.findImageFullScreen(IMAGE.其他.活跃度领取,0.7);
                log(活跃度领取+'活跃度领取');
                sleep(通用休眠时间*2);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                var 副本挑战 = UTILS.findImage(IMAGE.副本.副本挑战,2,1,0.7);
                log(副本挑战+'副本挑战');
                sleep(通用休眠时间*2);
                var 章节领取 = UTILS.findImage(IMAGE.其他.章节领取,2,2,0.7);
                log(章节领取+'章节领取');
                sleep(通用休眠时间*2);
                var 竞技挑战 = UTILS.findImageFullScreen(IMAGE.竞技场.挑战,0.7);
                log(竞技挑战+'竞技挑战');
                sleep(通用休眠时间*2);
                var 膜拜 = UTILS.findImageFullScreen(IMAGE.其他.膜拜,0.7);
                log(膜拜+'膜拜');
                sleep(通用休眠时间*2);
                var 创建军团 = UTILS.findImage(IMAGE.军团.创建军团,2,2,0.7);
                log(创建军团+'创建军团');
                sleep(通用休眠时间*2);
                // var 技能装备 = UTILS.findImage(IMAGE.技能.技能装备,2,2,0.7);
                // log(技能装备+'技能装备');
                // sleep(通用休眠时间*2);
                // var 签到 = UTILS.findImageFullScreen(IMAGE.其他.签到,0.7);
                // log(签到+'签到');
                // sleep(通用休眠时间*2);
                var 副本进入 = UTILS.findImage(IMAGE.其他.副本进入,2,2,0.7);
                log(副本进入+'副本进入');
                sleep(通用休眠时间*2);
                if(一键换装 != null && 竞技挑战 == null){
                    UTILS.click(一键换装.x,一键换装.y,200);
                }else if(熔炼){
                    UTILS.click(熔炼.x,熔炼.y,200);
                }else if(美人领取){
                    UTILS.click(美人领取.x ,美人领取.y,200);
                    sleep(通用休眠时间);
                    UTILS.toastLog('领取成功');
                    sleep(通用休眠时间);
                }else if(美人提升){
                    click(美人提升.x ,美人提升.y);
                }else if(首领挑战){
                   click(首领挑战.x ,首领挑战.y);
                }else if(活跃度领取){
                    click(活跃度领取.x ,活跃度领取.y);
                }else if(日常领取){
                    click(日常领取.x ,日常领取.y);
                }else if(章节领取){
                    click(章节领取.x ,章节领取.y+30);
                }else if(竞技挑战 != null && 一键换装 != null){
                    click(竞技挑战.x ,竞技挑战.y);
                }else if(膜拜 != null){
                    click(膜拜.x ,膜拜.y);
                }else if(创建军团 != null){
                    click(创建军团.x ,创建军团.y);
                    sleep(通用休眠时间*2);
                    setText('殇盟');
                    sleep(通用休眠时间*2);
                    var 创建按钮 = UTILS.findImage(IMAGE.军团.创建按钮,0,3,0.7);
                    log(创建按钮+'创建按钮');
                    sleep(通用休眠时间*2);
                    click(创建按钮.x ,创建按钮.y);
                }//else if(副本挑战){
                //     click(副本挑战.x ,副本挑战.y);
                // }
                // else if(签到){
                //     console.log(22);
                //     click(签到.x,签到.y);
                //     sleep(通用休眠时间);
                //     UTILS.toastLog('签到成功');
                //     sleep(通用休眠时间);
                // }
                 // else if(技能装备){
                //     click(技能装备.x,技能装备.y);
                // }
                else if(副本进入){
                    console.log(11111);
                    sleep(通用休眠时间*2)
                    click(副本进入.x+50,副本进入.y+40); 
                }
                sleep(通用休眠时间);
                var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                sleep(通用休眠时间);
                if(返回){
                    UTILS.click(返回.x,返回.y);
                }
            }else if(奖励 == null && 邮箱 != null){
                clearInterval(奖励时间);
                sleep(通用休眠时间);
                UTILS.toastLog('新手任务完毕');
            }else if(奖励 != null && 新手任务 != null){
                UTILS. click(奖励.x,奖励.y,200);
            }
            
        },通用休眠时间)
    }


    this.日常任务 = () => {
        var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
        log(日常任务+'开始日常任务');
        sleep(通用休眠时间*2);
        if(日常任务){
            UTILS.click(日常任务.x,日常任务.y);
            sleep(通用休眠时间*2);
            var 任务时间 = setInterval(() => {
                var 前往任务 = UTILS.findImage(IMAGE.任务.前往任务,2,2,0.7);
                log(前往任务+'前往任务');
                sleep(通用休眠时间*2);
                var 日常标志 = UTILS.findImage(IMAGE.任务.日常标志,1,0,0.7);
                log(日常标志+'日常标志');
                sleep(通用休眠时间*2);
                var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                log(日常任务+'开始日常任务');
                sleep(通用休眠时间*2);
                if(前往任务){
                    sleep(通用休眠时间);
                    sleep(通用休眠时间);
                    click(前往任务.x,前往任务.y + 400);
                    sleep(通用休眠时间);
                    this.日常任务判断();
                    // if(前往任务.x == storage.get('跨服5V5').x && 前往任务.y == storage.get('跨服5V5').y){
                    //     UTILS.toastLog('暂未开始');
                    //     sleep(通用休眠时间);
                    //     click(前往任务.x,前往任务.y + 200 );
                    //     sleep(通用休眠时间);
                    //     this.日常任务判断();
                    // }else if(前往任务.x == storage.get('魔神首领').x && 前往任务.y == storage.get('魔神首领').y){  
                    //     UTILS.toastLog('暂未开始');
                    //     sleep(通用休眠时间);
                    //     click(前往任务.x,前往任务.y + 200 );
                    //     sleep(通用休眠时间);
                    //     this.日常任务判断();
                    // }else{
                        
                    // }
                    

                }else if(前往任务 == null && 日常标志 != null){
                    clearInterval(任务时间);
                }
            },通用休眠时间);
            // var 日常领取时间 = setInterval(() => {
            //     var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
            //     log(日常领取+'日常领取');
            //     sleep(通用休眠时间*2);
            //     if(日常领取){
            //         sleep(通用休眠时间);
            //         click(日常领取.x,日常领取.y);
            //     }else{
            //         clearInterval(日常领取时间);
            //         sleep(通用休眠时间);
            //         var 活跃度领取时间 = setInterval(() => {
            //             var 活跃度领取 = UTILS.findImageFullScreen(IMAGE.其他.活跃度领取,0.7);
            //             log(活跃度领取+'活跃度领取');
            //             sleep(通用休眠时间*2);
            //             if(活跃度领取){
            //                 sleep(通用休眠时间);
            //                 click(活跃度领取.x,活跃度领取.y);
            //             }else{
            //                 clearInterval(活跃度领取时间);
            //             }
            //         },通用休眠时间) 
            //     }
            // },通用休眠时间)   
        }
    }


    this.商城购买 = () => {
        var 商城购买 = UTILS.findImage(IMAGE.商城.商城购买按钮,2,2,0.7);
        log(商城购买+'商城购买'); 
        sleep(通用休眠时间*2);
        var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
        log(日常任务+'开始日常任务');
        sleep(通用休眠时间*2);
        if(商城购买){
            UTILS.click(商城购买.x,商城购买.y);
        }
        var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
        sleep(通用休眠时间);
        if(返回){
            UTILS.click(返回.x,返回.y);
        }
        sleep(通用休眠时间);
        if(日常任务){
            UTILS.click(日常任务.x,日常任务.y);
        }
        sleep(通用休眠时间*2);
    }

    this.竞技场挑战 = () => {
        var 竞技挑战 = UTILS.findImageFullScreen(IMAGE.竞技场.挑战,0.7);
        log(竞技挑战+'竞技挑战');
        sleep(通用休眠时间*2);
        var 匹配对手 = UTILS.findImage(IMAGE.竞技场.匹配对手,2,1,0.7);
        log(匹配对手+'匹配对手');
        sleep(通用休眠时间*2);
        if(竞技挑战){
            UTILS.click(竞技挑战.x,竞技挑战.y);
        }else if(匹配对手){
            UTILS.click(匹配对手.x,匹配对手.y);
        }
    }

    this.锻造s = () => {
        var 锻造 = UTILS.findImage(IMAGE.锻造.锻造,1,2,0.7);
        log(锻造+'锻造');
        sleep(通用休眠时间*2);
        UTILS. click(锻造.x,锻造.y)
    }


    this.日常任务判断 = () => {
        sleep(通用休眠时间*2);
        var 日常标志 = UTILS.findImage(IMAGE.任务.日常标志,1,0,0.7);
        log(日常标志+'日常标志');
        sleep(通用休眠时间*2);
        var 商城标志 = UTILS.findImage(IMAGE.商城.商城标志,2,1,0.7);
        log(商城标志+'商城标志');
        sleep(通用休眠时间*2);
        var 竞技挑战 = UTILS.findImageFullScreen(IMAGE.竞技场.挑战,0.7);
        log(竞技挑战+'竞技挑战');
        sleep(通用休眠时间*2);
        var 一键强化 = UTILS.findImage(IMAGE.锻造.一键强化,0,2,0.7);
        log(一键强化+'一键强化');
        sleep(通用休眠时间*2);
        var 强化 = UTILS.findImage(IMAGE.锻造.强化,0,3,0.7);
        log(强化+'强化');
        sleep(通用休眠时间*2);
        var 强化标志 = UTILS.findImage(IMAGE.锻造.强化标志,2,1,0.7);
        log(强化标志+'强化标志');
        sleep(通用休眠时间*2);
        var 宝石标志 = UTILS.findImage(IMAGE.锻造.宝石标志,2,1,0.7);
        log(宝石标志+'宝石标志');
        sleep(通用休眠时间*2);
        var 注灵标志 = UTILS.findImage(IMAGE.锻造.注灵标志,2,1,0.7);
        log(注灵标志+'注灵标志');
        sleep(通用休眠时间*2);
        var 铸魂标志 = UTILS.findImage(IMAGE.锻造.铸魂标志,2,1,0.7);
        log(铸魂标志+'铸魂标志');
        sleep(通用休眠时间*2);
        var 跨服5V5标志 = UTILS.findImage(IMAGE.竞技场.跨服5V5标志,2,1,0.7);
        log(跨服5V5标志+'跨服5V5标志');
        sleep(通用休眠时间*2);
        var 膜拜 = UTILS.findImageFullScreen(IMAGE.其他.膜拜,0.7);
        log(膜拜+'膜拜');
        sleep(通用休眠时间*2);
        var 寻宝标志 = UTILS.findImage(IMAGE.其他.寻宝标志,2,1,0.7);
        log(寻宝标志+'寻宝标志');
        sleep(通用休眠时间*2);
        var 寻宝购买 = UTILS.findImage(IMAGE.其他.寻宝购买,2,1,0.7);
        log(寻宝购买+'寻宝购买');
        sleep(通用休眠时间*2);
        var 神将首领 = UTILS.findImage(IMAGE.其他.神将首领,2,1,0.7);
        log(神将首领+'神将首领');
        sleep(通用休眠时间*2);
        var 神将首领前往 = UTILS.findImage(IMAGE.其他.神将首领前往,2,2,0.7);
        log(神将首领前往+'寻宝神将首领前往购买');
        sleep(通用休眠时间*2);
        var 副本进入 = UTILS.findImage(IMAGE.其他.副本进入,2,2,0.7);
        log(副本进入+'副本进入');
        sleep(通用休眠时间*2);
        var 副本扫荡 = UTILS.findImage(IMAGE.其他.副本扫荡,2,2,0.7);
        log(副本扫荡+'副本扫荡');
        sleep(通用休眠时间*2);
        var 材料副本 = UTILS.findImage(IMAGE.副本.材料副本,2,1,0.7);
        log(材料副本+'材料副本');
        sleep(通用休眠时间*2);
        var 军团标志 = UTILS.findImageFullScreen(IMAGE.军团.军团标志,0.7);
        log(军团标志+'军团标志');
        sleep(通用休眠时间*2);
        // var 魔神首领 = UTILS.findImage(IMAGE.其他.魔神首领,2,1,0.7);
        // log(魔神首领+'魔神首领');
        // sleep(通用休眠时间*2);
        if(商城标志 ){
            var 商城购买 = UTILS.findImage(IMAGE.商城.商城购买按钮,2,2,0.7);
            log(商城购买+'商城购买'); 
            sleep(通用休眠时间*2);
            if(商城购买){
                UTILS.click(商城购买.x,商城购买.y,200);
            }
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
                sleep(通用休眠时间);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                if(日常领取){
                    click(日常领取.x,日常领取.y);
                }
            }
        }else if(魔神首领 != null && 寻宝购买 != null){
            storage.put('魔神首领',前往任务);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
            }
            sleep(通用休眠时间*2);
        }else if(竞技挑战){
            UTILS.click(竞技挑战.x,竞技挑战.y);
        }else if(强化标志 != null || 注灵标志 != null && 一键强化 != null && 强化 != null){
            UTILS.click(一键强化.x+30,一键强化.y+20,200);
            sleep(通用休眠时间);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
            }
            sleep(通用休眠时间*2);
        }else if(膜拜){
            click(膜拜.x ,膜拜.y);
            sleep(通用休眠时间);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
                sleep(通用休眠时间);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                if(日常领取){
                    click(日常领取.x,日常领取.y);
                }
            }
            sleep(通用休眠时间*2);
        }else if(寻宝标志 != null && 寻宝购买 != null){
            click(寻宝购买.x ,寻宝购买.y);
            sleep(通用休眠时间);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
                sleep(通用休眠时间);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                if(日常领取){
                    click(日常领取.x,日常领取.y);
                }
            }
            sleep(通用休眠时间*2);
        }else if(日常标志){
            UTILS.toastLog('暂时没有资格，请看清要求')
            sleep(通用休眠时间);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
                sleep(通用休眠时间);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                if(日常领取){
                    click(日常领取.x,日常领取.y);
                }
            }
            sleep(通用休眠时间*2);
            // clearInterval(任务时间);
        }else if(神将首领 != null && 神将首领前往 != null){
            click(神将首领前往.x ,神将首领前往.y);
            sleep(通用休眠时间);
            
        }else if(副本进入 != null && 副本扫荡 != null && 材料副本 != null){
            click(副本扫荡.x ,副本扫荡.y);
            sleep(通用休眠时间);
            var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
            sleep(通用休眠时间);
            if(返回){
                UTILS.click(返回.x,返回.y);
            }
            sleep(通用休眠时间);
            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
            log(日常任务+'开始日常任务');
            sleep(通用休眠时间*2);
            if(日常任务){
                UTILS.click(日常任务.x,日常任务.y);
                sleep(通用休眠时间);
                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                log(日常领取+'日常领取');
                sleep(通用休眠时间*2);
                if(日常领取){
                    click(日常领取.x,日常领取.y);
                }
            }   
        }else if(副本进入 != null && 材料副本 != null){
            click(副本进入.x ,副本进入.y);
            sleep(通用休眠时间);
            var 返回时间 = setInterval(() => {
                var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                sleep(通用休眠时间);
                if(返回){
                    UTILS.click(返回.x,返回.y);
                    sleep(通用休眠时间);
                    clearInterval(返回时间);
                    sleep(通用休眠时间);
                    var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                    log(日常任务+'开始日常任务');
                    sleep(通用休眠时间*2);
                    if(日常任务){
                        UTILS.click(日常任务.x,日常任务.y);
                        sleep(通用休眠时间);
                        var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                        log(日常领取+'日常领取');
                        sleep(通用休眠时间*2);
                        if(日常领取){
                            click(日常领取.x,日常领取.y);
                        }
                    }   
                }
            },通用休眠时间)
        }else if(军团标志){
                UTILS.toastLog('你已经进入军团页面');
                sleep(通用休眠时间);
                var 军团大厅 = UTILS.findImageFullScreen(IMAGE.军团.军团大厅,0.7);
                if(军团大厅){
                    UTILS.click(军团大厅.x,军团大厅.y);
                    sleep(通用休眠时间);
                    var 军团捐赠 = UTILS.findImage(IMAGE.军团.军团捐赠,2,2,0.7);
                    log(军团捐赠)
                    sleep(通用休眠时间);
                    var 捐赠时间 = setInterval(() => {
                      var 是否捐赠 = UTILS.findColorNoClick('#B21C0C',[[0,3,'#D5220F'],[10,6,'#AA1B0C']],[UTILS.deviceWidth/3*2,UTILS.deviceHeight/2,UTILS.deviceWidth/4,UTILS.deviceHeight/4],20)
                     if(是否捐赠 != null){
                         clearInterval(捐赠时间);
                         sleep(通用休眠时间);
                         var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                         sleep(通用休眠时间);
                         if(返回){
                            UTILS.click(返回.x,返回.y);
                            sleep(通用休眠时间);
                            var 退出 = UTILS.findColorNoClick('#140303',[[26,33,'#EDDB9C'],[62,59,'#752B11']],[UTILS.deviceWidth/6*5,0,UTILS.deviceWidth/7,UTILS.deviceHeight],20); 
                            if(退出){
                                UTILS.click(退出.x,退出.y);
                                sleep(通用休眠时间);
                                var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                                log(日常任务+'开始日常任务');
                                sleep(通用休眠时间);
                                var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                                log(日常任务+'开始日常任务');
                                sleep(通用休眠时间*2);
                                if(日常任务){
                                    UTILS.click(日常任务.x,日常任务.y);
                                    sleep(通用休眠时间);
                                    var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                                    log(日常领取+'日常领取');
                                    sleep(通用休眠时间*2);
                                    if(日常领取){
                                        click(日常领取.x,日常领取.y);
                                    }
                                }      
                            }
                            
                         }
                     }else{
                         UTILS.click(军团捐赠.x,军团捐赠.y,200)
                     }
                    },通用休眠时间)
                }
             }
             var 主线都尉 = UTILS.findImage(IMAGE.主线.都尉,2,2,0.7);
             if(主线都尉){
                 UTILS.click(主线都尉.x,主线都尉.y,200);
                 sleep(通用修眠时间);
                 var 任务时间 = setInterval(() => {
                    var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                    log(日常任务+'开始日常任务');
                    sleep(通用休眠时间*2);
                    if(日常任务){
                        clearInterval(任务时间);
                        sleep(通用休眠时间);
                        UTILS.click(日常任务.x,日常任务.y);
                        sleep(通用休眠时间);
                        var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                        log(日常领取+'日常领取');
                        sleep(通用休眠时间*2);
                        if(日常领取){
                            click(日常领取.x,日常领取.y);
                        }
                    }
                 },通用修眠时间)
             }

             var 福利大厅 = UTILS.findImage(IMAGE.福利大厅,2,1,0.7);
             var 招财聚宝 = UTILS.findImage(IMAGE.招财聚宝,2,2,0.7); 
             if(福利大厅 != null && 招财聚宝 != null) {
                UTILS.click(招财聚宝.x,招财聚宝.y);
                sleep(通用修眠时间);
                var 聚宝 = UTILS.findImage(IMAGE.聚宝,2,1,0.7);
                if(聚宝){
                    UTILS.click(聚宝.x,聚宝.y,200);
                    sleep(通用休眠时间);
                         var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
                         sleep(通用休眠时间);
                         if(返回){
                            UTILS.click(返回.x,返回.y);
                            sleep(通用休眠时间);
                            var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
                            log(日常任务+'开始日常任务');
                            sleep(通用休眠时间);
                            if(日常任务){
                                UTILS.click(日常任务.x,日常任务.y);
                                sleep(通用休眠时间);
                                var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
                                log(日常领取+'日常领取');
                                sleep(通用休眠时间*2);
                                if(日常领取){
                                    click(日常领取.x,日常领取.y);
                                }
                            }      
                            
                         }
                }
             }    
        // }
        // else if(跨服5V5标志 != null){
        //     storage.put('跨服5V5', 前往任务);
        //     sleep(通用休眠时间);
        //     UTILS.toastLog('战场未开启,请等待');
        //     sleep(通用休眠时间);
        //     var 返回 = UTILS.findImage(IMAGE.返回,2,2,0.7);
        //     sleep(通用休眠时间);
        //     if(返回){
        //         UTILS.click(返回.x,返回.y);
        //     }
        //     sleep(通用休眠时间);
        //     var 日常任务 = UTILS.findImage(IMAGE.任务.任务按钮,0,2,0.7);
        //     log(日常任务+'开始日常任务');
        //     sleep(通用休眠时间*2);
        //     if(日常任务){
        //         UTILS.click(日常任务.x,日常任务.y);
        //         sleep(通用休眠时间);
        //         var 日常领取 = UTILS.findImage(IMAGE.其他.日常领取,2,2,0.7);
        //         log(日常领取+'日常领取');
        //         sleep(通用休眠时间*2);
        //         if(日常领取){
        //             click(日常领取.x,日常领取.y);
        //         }
        //     }
        //     sleep(通用休眠时间*2);
        // }
    }



    


}
let game = new main();
game.init()