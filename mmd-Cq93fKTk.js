function e(n){switch(n){case"index":return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  SupplyChainManagement[Supply Chain Management]\r
  PartnerManagement[Partner Management]\r
  SalesManagement[Sales Management]\r
  FinanceandAccountManagement[Finance and Account Management]\r
  ManufacturingManagement[Manufacturing Management]\r
  ProductsAndServicesManagement[Products & Services Management]\r
  MarketingManagement[Marketing Management]\r
  AssetManagement[Asset Management]\r
  CommunicationsManagement[Communications Management]\r
  SecurityManagement[Security Management]\r
  TechnologyManagement[Technology Management]\r
  HumanResourceManagement[Human Resource Management]\r
  CorporateManagementAndGovernance[Corporate Management & Governance]\r
`;case"viewAccountsPayableManagement":return`---\r
title: "Accounts Payable Management"\r
---\r
graph TB\r
  subgraph FinanceandAccountManagementAccountsPayableManagement["Accounts Payable Management"]\r
    FinanceandAccountManagementAccountsPayableManagement.InvoiceManagement[Invoice Management]\r
    FinanceandAccountManagementAccountsPayableManagement.PaymentManagement[Payment Management]\r
  end\r
`;case"viewAccountsReceivableManagement":return`---\r
title: "Accounts Receivable Management"\r
---\r
graph TB\r
  subgraph FinanceandAccountManagementAccountsReceivableManagement["Accounts Receivable Management"]\r
    FinanceandAccountManagementAccountsReceivableManagement.Collections[Collections]\r
  end\r
`;case"viewAssetManagement":return`---\r
title: "Asset Management"\r
---\r
graph TB\r
  subgraph AssetManagement["Asset Management"]\r
    AssetManagement.AssetInformationManagement[Asset Information Management]\r
    AssetManagement.FleetManagement[Fleet Management]\r
    AssetManagement.PropertyManagement[Property Management]\r
  end\r
`;case"viewBrandManagement":return`---\r
title: "Brand Management"\r
---\r
graph TB\r
  subgraph MarketingManagementBrandManagement["Brand Management"]\r
    MarketingManagementBrandManagement.SocialMediaManagement[Social Media Management]\r
    MarketingManagementBrandManagement.TradeshowManagement[Tradeshow Management]\r
    MarketingManagementBrandManagement.BrandPartnershipManagement[Brand Partnership Management]\r
  end\r
`;case"viewBusinessEntityInformationManagement":return`---\r
title: "Business Entity Information Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagementBusinessEntityInformationManagement["Business Entity Information Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagementBusinessEntityInformationManagement.BusinessEntityLocationManagement[Business Entity Location Management]\r
  end\r
`;case"viewBusinessEntityLocationManagement":return`---\r
title: "Business Entity Location Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagementBusinessEntityInformationManagement["Business Entity Information Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagementBusinessEntityInformationManagement.BusinessEntityLocationManagement[Business Entity Location Management]\r
  end\r
`;case"viewBusinessEntityManagement":return`---\r
title: "Business Entity Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagement["Business Entity Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagement.BusinessEntityInformationManagement[Business Entity Information Management]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagement.BusinessEntityPerformanceManagement[Business Entity Performance Management]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagement.BusinessEntityCapitalStructureManagement[Business Entity Capital Structure Management]\r
    CorporateManagementAndGovernanceStrategyManagement2BusinessEntityManagement.BusinessEntityRiskManagement[Business Entity Risk Management]\r
  end\r
`;case"viewCommunicationsManagement":return`---\r
title: "Communications Management"\r
---\r
graph TB\r
  subgraph CommunicationsManagement["Communications Management"]\r
    CommunicationsManagement.OrganizationalCommunicationManagement[Organizational Communication Management]\r
    CommunicationsManagement.ExternalCommunicationManagement[External Communication Management]\r
    CommunicationsManagement.PublicRelations[Public Relations]\r
  end\r
`;case"viewContractManagement":return`---\r
title: "Contract Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceLegalContractManagement["Contract Management"]\r
    CorporateManagementAndGovernanceLegalContractManagement.CustomerContractManagement[Customer Contract Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.ContractInformationManagement[Contract Information Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.ITContractManagement[IT Contract Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.BrandPartnerManagement[Brand Partner  Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.ServiceProviderContractManagement[Service Provider Contract Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.PropertyContractManagement[Property Contract Management]\r
    CorporateManagementAndGovernanceLegalContractManagement.SupplierContractManagement[Supplier Contract Management]\r
  end\r
`;case"viewCorporateGovernanceManagement":return`---\r
title: "Corporate Governance Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceCorporateGovernanceManagement["Corporate Governance Management"]\r
    CorporateManagementAndGovernanceCorporateGovernanceManagement.PerformanceManagement[Performance Management]\r
    CorporateManagementAndGovernanceCorporateGovernanceManagement.RegulatoryCompliance[Regulatory Compliance]\r
    CorporateManagementAndGovernanceCorporateGovernanceManagement.EnterpriseRiskManagement[Enterprise Risk Management]\r
    CorporateManagementAndGovernanceCorporateGovernanceManagement.ESGManagement[ESG Management]\r
  end\r
`;case"viewCorporateManagementAndGovernance":return`---\r
title: "Corporate Management & Governance"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernance["Corporate Management & Governance"]\r
    CorporateManagementAndGovernance.Legal[Legal]\r
    CorporateManagementAndGovernance.CorporatePlanning[Corporate Planning]\r
    CorporateManagementAndGovernance.OrgStructureManagement[Org Structure Management]\r
    CorporateManagementAndGovernance.EventManagement[Event  Management]\r
    CorporateManagementAndGovernance.TravelManagement[Travel Management]\r
    CorporateManagementAndGovernance.EnterpriseChangeManagement[Enterprise Change Management]\r
    CorporateManagementAndGovernance.CorporateGovernanceManagement[Corporate Governance Management]\r
    CorporateManagementAndGovernance.StrategyManagement2[Strategy Management]\r
  end\r
`;case"viewCrossChannelManagement":return`---\r
title: "Cross Channel Management"\r
---\r
graph TB\r
  subgraph SalesManagementCrossChannelManagement["Cross Channel Management"]\r
    SalesManagementCrossChannelManagement.ReturnsManagement[Returns Management]\r
    SalesManagementCrossChannelManagement.Multi-channelOrderManagement[Multi-channel Order Management]\r
  end\r
`;case"viewCustomerManagement":return`---\r
title: "Customer Management"\r
---\r
graph TB\r
  subgraph PartnerManagementCustomerManagement["Customer Management"]\r
    PartnerManagementCustomerManagement.CustomerAnalytics[Customer Analytics]\r
    PartnerManagementCustomerManagement.CustomerExperienceManagement[Customer Experience Management]\r
    PartnerManagementCustomerManagement.CustomerInformationManagement[Customer Information Management]\r
    PartnerManagementCustomerManagement.CustomerRelationshipManagement[Customer Relationship Management]\r
    PartnerManagementCustomerManagement.CustomerSalesCycleManagement[Customer Sales Cycle Management]\r
    PartnerManagementCustomerManagement.CustomerService[Customer Service]\r
  end\r
`;case"viewDeliveryManagement":return`---\r
title: "Delivery Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagementTransportationand3rdPartyLogisticsManagementDeliveryManagement["Delivery Management"]\r
    SupplyChainManagementTransportationand3rdPartyLogisticsManagementDeliveryManagement.LastMileDelivery[Last Mile Delivery]\r
  end\r
`;case"viewDevicesandSystemsManagement":return`---\r
title: "Devices and Systems Management"\r
---\r
graph TB\r
  subgraph TechnologyManagementDevicesandSystemsManagement["Devices and Systems Management"]\r
    TechnologyManagementDevicesandSystemsManagement.IOTManagement[IOT Management]\r
  end\r
`;case"drilldown":return`---\r
title: "Drill-Down"\r
---\r
graph TB\r
  SupplyChainManagement[Supply Chain Management]\r
  PartnerManagement[Partner Management]\r
  SalesManagement[Sales Management]\r
  FinanceandAccountManagement[Finance and Account Management]\r
  ManufacturingManagement[Manufacturing Management]\r
  ProductsAndServicesManagement[Products & Services Management]\r
  MarketingManagement[Marketing Management]\r
  AssetManagement[Asset Management]\r
  CommunicationsManagement[Communications Management]\r
  SecurityManagement[Security Management]\r
  TechnologyManagement[Technology Management]\r
  HumanResourceManagement[Human Resource Management]\r
  CorporateManagementAndGovernance[Corporate Management & Governance]\r
`;case"viewEmployeeDevelopment":return`---\r
title: "Employee Development"\r
---\r
graph TB\r
  subgraph HumanResourceManagementEmployeeDevelopment["Employee Development"]\r
    HumanResourceManagementEmployeeDevelopment.EmployeeRecruiting[Employee Recruiting]\r
    HumanResourceManagementEmployeeDevelopment.EmployeeTraining[Employee Training]\r
  end\r
`;case"viewEnterpriseChangeManagement":return`---\r
title: "Enterprise Change Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceEnterpriseChangeManagement["Enterprise Change Management"]\r
    CorporateManagementAndGovernanceEnterpriseChangeManagement.ProgramManagement[Program Management]\r
    CorporateManagementAndGovernanceEnterpriseChangeManagement.Projectmanagement[Project management]\r
  end\r
`;case"viewFinanceandAccountManagement":return`---\r
title: "Finance and Account Management"\r
---\r
graph TB\r
  subgraph FinanceandAccountManagement["Finance and Account Management"]\r
    FinanceandAccountManagement.AccountsPayableManagement[Accounts Payable Management]\r
    FinanceandAccountManagement.AccountsReceivableManagement[Accounts Receivable Management]\r
    FinanceandAccountManagement.TaxManagement[Tax Management]\r
    FinanceandAccountManagement.EquityManagement[Equity Management]\r
    FinanceandAccountManagement.ExpenseManagement[Expense Management]\r
    FinanceandAccountManagement.TreasuryandCashManagement[Treasury and Cash Management]\r
  end\r
`;case"viewFleetManagement":return`---\r
title: "Fleet Management"\r
---\r
graph TB\r
  subgraph AssetManagementFleetManagement["Fleet Management"]\r
    AssetManagementFleetManagement.FleetAcquisition[Fleet Acquisition]\r
    AssetManagementFleetManagement.FleetMaintenance[Fleet Maintenance]\r
    AssetManagementFleetManagement.FleetSales[Fleet Sales]\r
  end\r
`;case"viewHumanResourceManagement":return`---\r
title: "Human Resource Management"\r
---\r
graph TB\r
  subgraph HumanResourceManagement["Human Resource Management"]\r
    HumanResourceManagement.EmployeeDevelopment[Employee Development]\r
    HumanResourceManagement.BenefitsManagement[Benefits Management]\r
    HumanResourceManagement.PayrollManagement[Payroll Management]\r
    HumanResourceManagement.EmployeeInformationManagement[Employee Information Management]\r
    HumanResourceManagement.HiringManagement[Hiring Management]\r
  end\r
`;case"viewIntellectualPropertyManagement":return`---\r
title: "Intellectual Property Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2IntellectualPropertyManagement["Intellectual Property Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2IntellectualPropertyManagement.IntellectualPropertyManagement[Intellectual Property Management]\r
    CorporateManagementAndGovernanceStrategyManagement2IntellectualPropertyManagement.IntellectualPropertyDefinition[Intellectual Property Definition]\r
  end\r
`;case"viewInventoryManagement":return`---\r
title: "Inventory Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagementInventoryManagement["Inventory Management"]\r
    SupplyChainManagementInventoryManagement.DemandandForecasting[Demand and Forecasting]\r
    SupplyChainManagementInventoryManagement.InventoryPlanning[Inventory Planning]\r
    SupplyChainManagementInventoryManagement.ConsignmentInventoryManagement[Consignment Inventory Management]\r
  end\r
`;case"viewInvestmentManagement":return`---\r
title: "Investment Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2InvestmentManagement["Investment Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2InvestmentManagement.InvestmentDefinition[Investment Definition]\r
    CorporateManagementAndGovernanceStrategyManagement2InvestmentManagement.InvestmentRiskManagement[Investment Risk Management]\r
    CorporateManagementAndGovernanceStrategyManagement2InvestmentManagement.InvestmentInformationManagement[Investment Information Management]\r
    CorporateManagementAndGovernanceStrategyManagement2InvestmentManagement.InvestmentValuation[Investment Valuation]\r
  end\r
`;case"viewJobManagement":return`---\r
title: "Job Management"\r
---\r
graph TB\r
  subgraph ManufacturingManagementJobManagement["Job Management"]\r
    ManufacturingManagementJobManagement.SchedulingManagement[Scheduling Management]\r
  end\r
`;case"viewLegal":return`---\r
title: "Legal"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceLegal["Legal"]\r
    CorporateManagementAndGovernanceLegal.PolicyManagement[Policy Management]\r
    CorporateManagementAndGovernanceLegal.ContractManagement[Contract Management]\r
  end\r
`;case"viewManufacturingManagement":return`---\r
title: "Manufacturing Management"\r
---\r
graph TB\r
  subgraph ManufacturingManagement["Manufacturing Management"]\r
    ManufacturingManagement.JobManagement[Job Management]\r
    ManufacturingManagement.ManufacturingManagement[Manufacturing Management]\r
    ManufacturingManagement.QualityAssurance[Quality Assurance]\r
    ManufacturingManagement.RawMaterialManagement[Raw Material Management]\r
    ManufacturingManagement.HeavyManufacturingManagement[Heavy Manufacturing Management]\r
    ManufacturingManagement.LightManufacturingManagement[Light Manufacturing Management]\r
  end\r
`;case"viewMarketingManagement":return`---\r
title: "Marketing Management"\r
---\r
graph TB\r
  subgraph MarketingManagement["Marketing Management"]\r
    MarketingManagement.BrandManagement[Brand Management]\r
    MarketingManagement.CampaignManagement[Campaign Management]\r
  end\r
`;case"viewPartnerManagement":return`---\r
title: "Partner Management"\r
---\r
graph TB\r
  subgraph PartnerManagement["Partner Management"]\r
    PartnerManagement.SupplierManagement[Supplier Management]\r
    PartnerManagement.CustomerManagement[Customer Management]\r
  end\r
`;case"viewPhysicalSecurityManagement":return`---\r
title: "Physical Security Management"\r
---\r
graph TB\r
  subgraph SecurityManagementPhysicalSecurityManagement["Physical Security Management"]\r
    SecurityManagementPhysicalSecurityManagement.LossPrevention[Loss Prevention]\r
  end\r
`;case"viewProductInformationManagement":return`---\r
title: "Product Information Management"\r
---\r
graph TB\r
  subgraph ProductsAndServicesManagementProductInformationManagement["Product Information Management"]\r
    ProductsAndServicesManagementProductInformationManagement.CrossReferenceManagement[Cross Reference Management]\r
    ProductsAndServicesManagementProductInformationManagement.ProductAttributeManagement[Product Attribute Management]\r
    ProductsAndServicesManagementProductInformationManagement.DigitalAssetManagement[Digital Asset Management]\r
    ProductsAndServicesManagementProductInformationManagement.ProductTaxonomyManagement[Product Taxonomy Management]\r
  end\r
`;case"viewProductLineManagement":return`---\r
title: "Product Line Management"\r
---\r
graph TB\r
  subgraph ProductsAndServicesManagementProductLineManagement["Product Line Management"]\r
    ProductsAndServicesManagementProductLineManagement.ProductDevelopment[Product Development]\r
  end\r
`;case"viewProductsAndServicesManagement":return`---\r
title: "Products & Services Management"\r
---\r
graph TB\r
  subgraph ProductsAndServicesManagement["Products & Services Management"]\r
    ProductsAndServicesManagement.ServicesManagement[Services Management]\r
    ProductsAndServicesManagement.PrintServicesManagement[Print Services Management]\r
    ProductsAndServicesManagement.CatalogManagement[Catalog Management]\r
    ProductsAndServicesManagement.ProductLineManagement[Product Line Management]\r
    ProductsAndServicesManagement.ProductInformationManagement[Product Information Management]\r
  end\r
`;case"viewPropertyManagement":return`---\r
title: "Property Management"\r
---\r
graph TB\r
  subgraph AssetManagementPropertyManagement["Property Management"]\r
    AssetManagementPropertyManagement.ConstructionManagement[Construction Management]\r
    AssetManagementPropertyManagement.LeaseManagement[Lease Management]\r
    AssetManagementPropertyManagement.OccupancyManagement[Occupancy Management]\r
    AssetManagementPropertyManagement.FacilityMaintenance[Facility Maintenance]\r
  end\r
`;case"viewSalesChannelManagement":return`---\r
title: "Sales Channel Management"\r
---\r
graph TB\r
  subgraph SalesManagementSalesChannelManagement["Sales Channel Management"]\r
    SalesManagementSalesChannelManagement.Merchandising[Merchandising]\r
    SalesManagementSalesChannelManagement.PromosandIncentives[Promos and Incentives]\r
  end\r
`;case"viewSalesInformationManagement":return`---\r
title: "Sales Information Management"\r
---\r
graph TB\r
  subgraph SalesManagementSalesInformationManagement["Sales Information Management"]\r
    SalesManagementSalesInformationManagement.BookOfBusinessManagement[Book Of Business Management]\r
    SalesManagementSalesInformationManagement.SalesTerritoriesManagement[Sales Territories Management]\r
  end\r
`;case"viewSalesManagement":return`---\r
title: "Sales Management"\r
---\r
graph TB\r
  subgraph SalesManagement["Sales Management"]\r
    SalesManagement.SalesChannelManagement[Sales Channel Management]\r
    SalesManagement.SalesInformationManagement[Sales Information Management]\r
    SalesManagement.CrossChannelManagement[Cross Channel Management]\r
    SalesManagement.SalesOrderManagement[Sales Order Management]\r
    SalesManagement.PricingManagement[Pricing Management]\r
  end\r
`;case"viewSalesOrderManagement":return`---\r
title: "Sales Order Management"\r
---\r
graph TB\r
  subgraph SalesManagementSalesOrderManagement["Sales Order Management"]\r
    SalesManagementSalesOrderManagement.BillingandInvoicing[Billing and Invoicing]\r
    SalesManagementSalesOrderManagement.CustomerQuoteManagement[Customer Quote Management]\r
    SalesManagementSalesOrderManagement.FulfillmentManagement[Fulfillment Management]\r
  end\r
`;case"viewSecurityManagement":return`---\r
title: "Security Management"\r
---\r
graph TB\r
  subgraph SecurityManagement["Security Management"]\r
    SecurityManagement.ITSecurityandRiskManagement[IT Security and Risk Management]\r
    SecurityManagement.PhysicalSecurityManagement[Physical Security Management]\r
  end\r
`;case"viewSourcingManagement":return`---\r
title: "Sourcing Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagementSourcingManagement["Sourcing Management"]\r
    SupplyChainManagementSourcingManagement.SupplierQuoting[Supplier Quoting]\r
    SupplyChainManagementSourcingManagement.COGSManagement[COGS Management]\r
  end\r
`;case"viewStrategyManagement2":return`---\r
title: "Strategy Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2["Strategy Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2.BusinessEntityManagement[Business Entity Management]\r
    CorporateManagementAndGovernanceStrategyManagement2.StrategyManagement3[Strategy Management]\r
    CorporateManagementAndGovernanceStrategyManagement2.InvestmentManagement[Investment Management]\r
    CorporateManagementAndGovernanceStrategyManagement2.IntellectualPropertyManagement[Intellectual Property Management]\r
  end\r
`;case"viewStrategyManagement3":return`---\r
title: "Strategy Management"\r
---\r
graph TB\r
  subgraph CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3["Strategy Management"]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.ObjectiveManagement[Objective Management]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.GoalDefinition[Goal Definition]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.ActionItemDefinition[Action Item Definition]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.Strategyinformationmanagement[Strategy information management]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.StrategyDefinition[Strategy Definition]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.VisionDefinition[Vision Definition]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.StrategyRiskManagement[Strategy Risk Management]\r
    CorporateManagementAndGovernanceStrategyManagement2StrategyManagement3.PricingStrategyManagement[Pricing Strategy Management]\r
  end\r
`;case"viewSupplierManagement":return`---\r
title: "Supplier Management"\r
---\r
graph TB\r
  subgraph PartnerManagementSupplierManagement["Supplier Management"]\r
    PartnerManagementSupplierManagement.SupplierInformationManagement[Supplier Information Management]\r
    PartnerManagementSupplierManagement.SupplierQualityManagement[Supplier Quality Management]\r
    PartnerManagementSupplierManagement.SupplierRelationshipManagement[Supplier Relationship Management]\r
    PartnerManagementSupplierManagement.SupplierRiskManagement[Supplier Risk Management]\r
  end\r
`;case"viewSupplyChainManagement":return`---\r
title: "Supply Chain Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagement["Supply Chain Management"]\r
    SupplyChainManagement.InventoryManagement[Inventory Management]\r
    SupplyChainManagement.WarehousingManagement[Warehousing Management]\r
    SupplyChainManagement.Transportationand3rdPartyLogisticsManagement[Transportation and 3rd Party Logistics Management]\r
    SupplyChainManagement.SourcingManagement[Sourcing Management]\r
    SupplyChainManagement.SupplyChainPlanning[Supply Chain Planning]\r
    SupplyChainManagement.Procurement[Procurement]\r
    SupplyChainManagement.SupplyChainGovernanceandRiskManagement[Supply Chain Governance and Risk Management]\r
  end\r
`;case"viewTechnologyManagement":return`---\r
title: "Technology Management"\r
---\r
graph TB\r
  subgraph TechnologyManagement["Technology Management"]\r
    TechnologyManagement.DevicesandSystemsManagement[Devices and Systems Management]\r
    TechnologyManagement.ITArchitecture[IT Architecture]\r
    TechnologyManagement.ITSupportManagement[IT Support Management]\r
    TechnologyManagement.ITPortfolioManagement[IT Portfolio Management]\r
    TechnologyManagement.SoftwareDeliveryManagement[Software Delivery Management]\r
  end\r
`;case"viewTransportation3rdPartLogisticsManagement":return`---\r
title: "Transportation and 3rd Party Logistics Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagementTransportationand3rdPartyLogisticsManagement["Transportation and 3rd Party Logistics Management"]\r
    SupplyChainManagementTransportationand3rdPartyLogisticsManagement.Third-PartyCarrierManagement[Third-Party Carrier Management]\r
    SupplyChainManagementTransportationand3rdPartyLogisticsManagement.TruckRouteManagement[Truck Route Management]\r
    SupplyChainManagementTransportationand3rdPartyLogisticsManagement.TransportationRegulatoryCompliance[Transportation Regulatory Compliance]\r
    SupplyChainManagementTransportationand3rdPartyLogisticsManagement.DeliveryManagement[Delivery Management]\r
  end\r
`;case"viewWarehousingManagement":return`---\r
title: "Warehousing Management"\r
---\r
graph TB\r
  subgraph SupplyChainManagementWarehousingManagement["Warehousing Management"]\r
    SupplyChainManagementWarehousingManagement.SlotManagement[Slot Management]\r
  end\r
`;case"level1capabilities":return`---\r
title: "Level 1 Capabilities"\r
---\r
graph TB\r
  SupplyChainManagement[Supply Chain Management]\r
  PartnerManagement[Partner Management]\r
  SalesManagement[Sales Management]\r
  FinanceandAccountManagement[Finance and Account Management]\r
  ManufacturingManagement[Manufacturing Management]\r
  ProductsAndServicesManagement[Products & Services Management]\r
  MarketingManagement[Marketing Management]\r
  AssetManagement[Asset Management]\r
  CommunicationsManagement[Communications Management]\r
  SecurityManagement[Security Management]\r
  TechnologyManagement[Technology Management]\r
  HumanResourceManagement[Human Resource Management]\r
  CorporateManagementAndGovernance[Corporate Management & Governance]\r
`;case"level1and2capabilities":return`---\r
title: "Level 1 and 2 Capabilities"\r
---\r
graph TB\r
  subgraph SupplyChainManagement["Supply Chain Management"]\r
    SupplyChainManagement.InventoryManagement[Inventory Management]\r
    SupplyChainManagement.WarehousingManagement[Warehousing Management]\r
    SupplyChainManagement.Transportationand3rdPartyLogisticsManagement[Transportation and 3rd Party Logistics Management]\r
    SupplyChainManagement.SourcingManagement[Sourcing Management]\r
    SupplyChainManagement.SupplyChainPlanning[Supply Chain Planning]\r
    SupplyChainManagement.Procurement[Procurement]\r
    SupplyChainManagement.SupplyChainGovernanceandRiskManagement[Supply Chain Governance and Risk Management]\r
  end\r
  subgraph PartnerManagement["Partner Management"]\r
    PartnerManagement.SupplierManagement[Supplier Management]\r
    PartnerManagement.CustomerManagement[Customer Management]\r
  end\r
  subgraph SalesManagement["Sales Management"]\r
    SalesManagement.SalesChannelManagement[Sales Channel Management]\r
    SalesManagement.SalesInformationManagement[Sales Information Management]\r
    SalesManagement.CrossChannelManagement[Cross Channel Management]\r
    SalesManagement.SalesOrderManagement[Sales Order Management]\r
    SalesManagement.PricingManagement[Pricing Management]\r
  end\r
  subgraph FinanceandAccountManagement["Finance and Account Management"]\r
    FinanceandAccountManagement.AccountsPayableManagement[Accounts Payable Management]\r
    FinanceandAccountManagement.AccountsReceivableManagement[Accounts Receivable Management]\r
    FinanceandAccountManagement.TaxManagement[Tax Management]\r
    FinanceandAccountManagement.EquityManagement[Equity Management]\r
    FinanceandAccountManagement.ExpenseManagement[Expense Management]\r
    FinanceandAccountManagement.TreasuryandCashManagement[Treasury and Cash Management]\r
  end\r
  subgraph ManufacturingManagement["Manufacturing Management"]\r
    ManufacturingManagement.JobManagement[Job Management]\r
    ManufacturingManagement.ManufacturingManagement[Manufacturing Management]\r
    ManufacturingManagement.QualityAssurance[Quality Assurance]\r
    ManufacturingManagement.RawMaterialManagement[Raw Material Management]\r
    ManufacturingManagement.HeavyManufacturingManagement[Heavy Manufacturing Management]\r
    ManufacturingManagement.LightManufacturingManagement[Light Manufacturing Management]\r
  end\r
  subgraph ProductsAndServicesManagement["Products & Services Management"]\r
    ProductsAndServicesManagement.ServicesManagement[Services Management]\r
    ProductsAndServicesManagement.PrintServicesManagement[Print Services Management]\r
    ProductsAndServicesManagement.CatalogManagement[Catalog Management]\r
    ProductsAndServicesManagement.ProductLineManagement[Product Line Management]\r
    ProductsAndServicesManagement.ProductInformationManagement[Product Information Management]\r
  end\r
  subgraph MarketingManagement["Marketing Management"]\r
    MarketingManagement.BrandManagement[Brand Management]\r
    MarketingManagement.CampaignManagement[Campaign Management]\r
  end\r
  subgraph AssetManagement["Asset Management"]\r
    AssetManagement.AssetInformationManagement[Asset Information Management]\r
    AssetManagement.FleetManagement[Fleet Management]\r
    AssetManagement.PropertyManagement[Property Management]\r
  end\r
  subgraph CommunicationsManagement["Communications Management"]\r
    CommunicationsManagement.OrganizationalCommunicationManagement[Organizational Communication Management]\r
    CommunicationsManagement.ExternalCommunicationManagement[External Communication Management]\r
    CommunicationsManagement.PublicRelations[Public Relations]\r
  end\r
  subgraph SecurityManagement["Security Management"]\r
    SecurityManagement.ITSecurityandRiskManagement[IT Security and Risk Management]\r
    SecurityManagement.PhysicalSecurityManagement[Physical Security Management]\r
  end\r
  subgraph TechnologyManagement["Technology Management"]\r
    TechnologyManagement.DevicesandSystemsManagement[Devices and Systems Management]\r
    TechnologyManagement.ITArchitecture[IT Architecture]\r
    TechnologyManagement.ITSupportManagement[IT Support Management]\r
    TechnologyManagement.ITPortfolioManagement[IT Portfolio Management]\r
    TechnologyManagement.SoftwareDeliveryManagement[Software Delivery Management]\r
  end\r
  subgraph HumanResourceManagement["Human Resource Management"]\r
    HumanResourceManagement.EmployeeDevelopment[Employee Development]\r
    HumanResourceManagement.BenefitsManagement[Benefits Management]\r
    HumanResourceManagement.PayrollManagement[Payroll Management]\r
    HumanResourceManagement.EmployeeInformationManagement[Employee Information Management]\r
    HumanResourceManagement.HiringManagement[Hiring Management]\r
  end\r
  subgraph CorporateManagementAndGovernance["Corporate Management & Governance"]\r
    CorporateManagementAndGovernance.Legal[Legal]\r
    CorporateManagementAndGovernance.CorporatePlanning[Corporate Planning]\r
    CorporateManagementAndGovernance.OrgStructureManagement[Org Structure Management]\r
    CorporateManagementAndGovernance.EventManagement[Event  Management]\r
    CorporateManagementAndGovernance.TravelManagement[Travel Management]\r
    CorporateManagementAndGovernance.EnterpriseChangeManagement[Enterprise Change Management]\r
    CorporateManagementAndGovernance.CorporateGovernanceManagement[Corporate Governance Management]\r
    CorporateManagementAndGovernance.StrategyManagement2[Strategy Management]\r
  end\r
`;default:throw new Error("Unknown viewId: "+n)}}export{e as mmdSource};
