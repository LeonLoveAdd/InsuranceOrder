package com.jdlink.domain;

import com.jdlink.domain.dataItem.OrderStateDataItem;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

/**
 * 保单数据结构
 */
public class InsuranceOrderItem {
    /**
     * 保单号
     */
    private String id;

    /*新的保单号*/
    private String newId;
    /**
     * 订单号（外键）
     */
    private String orderId;
    /**
     * 保险公司名称
     */
    private String insureCompanyName;
    /**
     * 投保日期
     */
    private Date insureDate;

    /*投保日期开始日期*/
    private Date insureDateBegin;

    /*投保日期结束日期*/
    private Date insureDateEnd;
    /**
     * 保险费
     */
    private Float premium;
    /**
     * 附件url
     */
    private String fileUrl;

    /*附件对象*/
    private MultipartFile  multipartFile;
    /**
     * 创建日期
     */
    private Date creationTime;
    /**
     *  创建人
     */
    private String creator;
    /**
     * 修改时间
     */
    private Date modifyTime;
    /**
     * 修改人
     */
    private String modifier;
    /**
     *  保险单据状态
     */
    private OrderStateDataItem orderStateDataItem;

    /*异常负责人*/
    private String abnormalPerson;

    /*异常信息*/
    private String abnormalInfo;


    /*存储货物价值ID*/
    private Integer goodsValueId;

    public Integer getGoodsValueId() {
        return goodsValueId;
    }

    public void setGoodsValueId(Integer goodsValueId) {
        this.goodsValueId = goodsValueId;
    }

    public String getAbnormalPerson() {
        return abnormalPerson;
    }

    public void setAbnormalPerson(String abnormalPerson) {
        this.abnormalPerson = abnormalPerson;
    }

    public String getAbnormalInfo() {
        return abnormalInfo;
    }

    public void setAbnormalInfo(String abnormalInfo) {
        this.abnormalInfo = abnormalInfo;
    }

    public MultipartFile getMultipartFile() {
        return multipartFile;
    }

    public void setMultipartFile(MultipartFile multipartFile) {
        this.multipartFile = multipartFile;
    }

    public Date getInsureDateBegin() {
        return insureDateBegin;
    }

    public void setInsureDateBegin(Date insureDateBegin) {
        this.insureDateBegin = insureDateBegin;
    }

    public Date getInsureDateEnd() {
        return insureDateEnd;
    }

    public void setInsureDateEnd(Date insureDateEnd) {
        this.insureDateEnd = insureDateEnd;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getInsureCompanyName() {
        return insureCompanyName;
    }

    public void setInsureCompanyName(String insureCompanyName) {
        this.insureCompanyName = insureCompanyName;
    }

    public Date getInsureDate() {
        return insureDate;
    }

    public void setInsureDate(Date insureDate) {
        this.insureDate = insureDate;
    }

    public Float getPremium() {
        return premium;
    }

    public void setPremium(Float premium) {
        this.premium = premium;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    public OrderStateDataItem getOrderStateDataItem() {
        return orderStateDataItem;
    }

    public void setOrderStateDataItem(OrderStateDataItem orderStateDataItem) {
        this.orderStateDataItem = orderStateDataItem;
    }

    public String getNewId() {
        return newId;
    }

    public void setNewId(String newId) {
        this.newId = newId;
    }

    @Override
    public String toString() {
        return "InsuranceOrderItem{" +
                "id='" + id + '\'' +
                ", orderId='" + orderId + '\'' +
                ", insureCompanyName='" + insureCompanyName + '\'' +
                ", insureDate=" + insureDate +
                ", premium=" + premium +
                ", fileUrl='" + fileUrl + '\'' +
                ", creationTime=" + creationTime +
                ", creator='" + creator + '\'' +
                ", modifyTime=" + modifyTime +
                ", modifier='" + modifier + '\'' +
                ", orderStateDataItem=" + orderStateDataItem +
                '}';
    }
}
