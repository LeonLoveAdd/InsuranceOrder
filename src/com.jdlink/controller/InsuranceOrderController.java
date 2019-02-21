package com.jdlink.controller;

import com.jdlink.domain.InsuranceOrder;
import com.jdlink.service.InsuranceOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;
import java.util.List;

@Controller
public class InsuranceOrderController {
@Autowired
    InsuranceOrderService insuranceOrderService;

   /*获取所有订单的信息*/
    @RequestMapping("/orderList")
    public ModelAndView getAllInsuranceOrder(ModelAndView modelAndView){
        ModelAndView mav=new ModelAndView();
        try{
            List<InsuranceOrder> insuranceOrderList=insuranceOrderService.listInsuranceOrder();
            System.out.println("所有订单"+insuranceOrderList);
            System.out.println("订单个数"+insuranceOrderList.size());
            mav.addObject("insuranceOrderList", insuranceOrderList);
        }
        catch (Exception e){

        }

        mav.setViewName("orderList");
//        System.out.println("访问路径走到这了！");

        return mav;
    }

}
