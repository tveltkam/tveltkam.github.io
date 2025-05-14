function e(n){switch(n){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    supplychainmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Supply Chain Management</FONT>>,
        likec4_id=SupplyChainManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Partner Management</FONT>>,
        likec4_id=PartnerManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    supplychainmanagement -> partnermanagement [style=invis];
    salesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Sales Management</FONT>>,
        likec4_id=SalesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement -> salesmanagement [style=invis];
    financeandaccountmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Finance and Account Management</FONT>>,
        likec4_id=FinanceandAccountManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    salesmanagement -> financeandaccountmanagement [style=invis];
    manufacturingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Manufacturing Management</FONT>>,
        likec4_id=ManufacturingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Products &amp; Services Management</FONT>>,
        likec4_id=ProductsAndServicesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    manufacturingmanagement -> productsandservicesmanagement [style=invis];
    marketingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Marketing Management</FONT>>,
        likec4_id=MarketingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement -> marketingmanagement [style=invis];
    assetmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Asset Management</FONT>>,
        likec4_id=AssetManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    marketingmanagement -> assetmanagement [style=invis];
    communicationsmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Communications Management</FONT>>,
        likec4_id=CommunicationsManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Security Management</FONT>>,
        likec4_id=SecurityManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    communicationsmanagement -> securitymanagement [style=invis];
    technologymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Technology Management</FONT>>,
        likec4_id=TechnologyManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement -> technologymanagement [style=invis];
    humanresourcemanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Human Resource Management</FONT>>,
        likec4_id=HumanResourceManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    technologymanagement -> humanresourcemanagement [style=invis];
    corporatemanagementandgovernance [height=2.5,
        label=<<FONT POINT-SIZE="19">Corporate Management &amp; Governance</FONT>>,
        likec4_id=CorporateManagementAndGovernance,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case"viewAccountsPayableManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewAccountsPayableManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_accountspayablemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACCOUNTS PAYABLE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="FinanceandAccountManagement.AccountsPayableManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        invoicemanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Invoice Management</FONT>>,
            likec4_id="FinanceandAccountManagement.AccountsPayableManagement.InvoiceManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        paymentmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Payment Management</FONT>>,
            likec4_id="FinanceandAccountManagement.AccountsPayableManagement.PaymentManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    invoicemanagement -> paymentmanagement [style=invis];
}
`;case"viewAccountsReceivableManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewAccountsReceivableManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_accountsreceivablemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACCOUNTS RECEIVABLE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="FinanceandAccountManagement.AccountsReceivableManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        collections [height=2.5,
            label=<<FONT POINT-SIZE="19">Collections</FONT>>,
            likec4_id="FinanceandAccountManagement.AccountsReceivableManagement.Collections",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewAssetManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewAssetManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_assetmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ASSET MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=AssetManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            assetinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Asset Information Management</FONT>>,
                likec4_id="AssetManagement.AssetInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            fleetmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Fleet Management</FONT>>,
                likec4_id="AssetManagement.FleetManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        propertymanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Property Management</FONT>>,
            likec4_id="AssetManagement.PropertyManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        assetinformationmanagement -> propertymanagement [style=invis];
    }
}
`;case"viewBrandManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewBrandManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_brandmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAND MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="MarketingManagement.BrandManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            socialmediamanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Social Media Management</FONT>>,
                likec4_id="MarketingManagement.BrandManagement.SocialMediaManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            tradeshowmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Tradeshow Management</FONT>>,
                likec4_id="MarketingManagement.BrandManagement.TradeshowManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        brandpartnershipmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Brand Partnership Management</FONT>>,
            likec4_id="MarketingManagement.BrandManagement.BrandPartnershipManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        socialmediamanagement -> brandpartnershipmanagement [style=invis];
    }
}
`;case"viewBusinessEntityInformationManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewBusinessEntityInformationManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_businessentityinformationmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BUSINESS ENTITY INFORMATION MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityInformationManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        businessentitylocationmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Business Entity Location Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityInformationManagement.BusinessEntityLocationManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewBusinessEntityLocationManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewBusinessEntityLocationManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_businessentityinformationmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BUSINESS ENTITY INFORMATION MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityInformationManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        businessentitylocationmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Business Entity Location Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityInformationManagement.BusinessEntityLocationManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewBusinessEntityManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewBusinessEntityManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_businessentitymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BUSINESS ENTITY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            businessentityinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Business Entity Information<BR/>Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            businessentityperformancemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Business Entity Performance<BR/>Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityPerformanceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            businessentitycapitalstructuremanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Business Entity Capital Structure<BR/>Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityCapitalStructureManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            businessentityriskmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Business Entity Risk Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement.BusinessEntityRiskManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        businessentityinformationmanagement -> businessentitycapitalstructuremanagement [style=invis];
    }
    businessentityperformancemanagement -> businessentityriskmanagement [style=invis];
}
`;case"viewCommunicationsManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewCommunicationsManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_communicationsmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>COMMUNICATIONS MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=CommunicationsManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            organizationalcommunicationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Organizational Communication<BR/>Management</FONT>>,
                likec4_id="CommunicationsManagement.OrganizationalCommunicationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            externalcommunicationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">External Communication Management</FONT>>,
                likec4_id="CommunicationsManagement.ExternalCommunicationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        publicrelations [height=2.5,
            label=<<FONT POINT-SIZE="19">Public Relations</FONT>>,
            likec4_id="CommunicationsManagement.PublicRelations",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        organizationalcommunicationmanagement -> publicrelations [style=invis];
    }
}
`;case"viewContractManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewContractManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_contractmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONTRACT MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            customercontractmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Contract Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.CustomerContractManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            contractinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Contract Information Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.ContractInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            itcontractmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">IT Contract Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.ITContractManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            brandpartnermanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Brand Partner  Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.BrandPartnerManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            serviceprovidercontractmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Service Provider Contract<BR/>Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.ServiceProviderContractManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            propertycontractmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Property Contract Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.PropertyContractManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        customercontractmanagement -> brandpartnermanagement [minlen=1,
            style=invis];
        suppliercontractmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Supplier Contract Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement.SupplierContractManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        brandpartnermanagement -> suppliercontractmanagement [minlen=1,
            style=invis];
    }
    contractinformationmanagement -> itcontractmanagement [style=invis];
    itcontractmanagement -> serviceprovidercontractmanagement [style=invis];
    serviceprovidercontractmanagement -> propertycontractmanagement [style=invis];
}
`;case"viewCorporateGovernanceManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewCorporateGovernanceManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_corporategovernancemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CORPORATE GOVERNANCE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            performancemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Performance Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement.PerformanceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            regulatorycompliance [height=2.5,
                label=<<FONT POINT-SIZE="19">Regulatory Compliance</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement.RegulatoryCompliance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            enterpriseriskmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Enterprise Risk Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement.EnterpriseRiskManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            esgmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">ESG Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement.ESGManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        performancemanagement -> enterpriseriskmanagement [style=invis];
    }
    regulatorycompliance -> esgmanagement [style=invis];
}
`;case"viewCorporateManagementAndGovernance":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewCorporateManagementAndGovernance,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_corporatemanagementandgovernance {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CORPORATE MANAGEMENT &amp; GOVERNANCE</B></FONT>>,
            likec4_depth=1,
            likec4_id=CorporateManagementAndGovernance,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            legal [height=2.5,
                label=<<FONT POINT-SIZE="19">Legal</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            corporateplanning [height=2.5,
                label=<<FONT POINT-SIZE="19">Corporate Planning</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporatePlanning",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            orgstructuremanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Org Structure Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.OrgStructureManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            eventmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Event  Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.EventManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            travelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Travel Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.TravelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            enterprisechangemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Enterprise Change Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.EnterpriseChangeManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            corporategovernancemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Corporate Governance Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            strategymanagement2 [height=2.5,
                label=<<FONT POINT-SIZE="19">Strategy Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        legal -> eventmanagement [minlen=1,
            style=invis];
        eventmanagement -> corporategovernancemanagement [minlen=1,
            style=invis];
    }
    corporateplanning -> orgstructuremanagement [style=invis];
    orgstructuremanagement -> travelmanagement [style=invis];
    travelmanagement -> enterprisechangemanagement [style=invis];
}
`;case"viewCrossChannelManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewCrossChannelManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_crosschannelmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CROSS CHANNEL MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SalesManagement.CrossChannelManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        returnsmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Returns Management</FONT>>,
            likec4_id="SalesManagement.CrossChannelManagement.ReturnsManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "multi-channelordermanagement" [height=2.5,
            label=<<FONT POINT-SIZE="19">Multi-channel Order Management</FONT>>,
            likec4_id="SalesManagement.CrossChannelManagement.Multi-channelOrderManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    returnsmanagement -> "multi-channelordermanagement" [style=invis];
}
`;case"viewCustomerManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewCustomerManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_customermanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="PartnerManagement.CustomerManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            customeranalytics [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Analytics</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerAnalytics",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            customerexperiencemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Experience Management</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerExperienceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            customerinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Information Management</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            customerrelationshipmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Relationship Management</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerRelationshipManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            customersalescyclemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Sales Cycle Management</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerSalesCycleManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            customerservice [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Service</FONT>>,
                likec4_id="PartnerManagement.CustomerManagement.CustomerService",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        customeranalytics -> customerrelationshipmanagement [style=invis];
    }
    customerexperiencemanagement -> customerinformationmanagement [style=invis];
    customerinformationmanagement -> customersalescyclemanagement [style=invis];
    customersalescyclemanagement -> customerservice [style=invis];
}
`;case"viewDeliveryManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewDeliveryManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_deliverymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DELIVERY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.DeliveryManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        lastmiledelivery [height=2.5,
            label=<<FONT POINT-SIZE="19">Last Mile Delivery</FONT>>,
            likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.DeliveryManagement.LastMileDelivery",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewDevicesandSystemsManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewDevicesandSystemsManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_devicesandsystemsmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DEVICES AND SYSTEMS MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="TechnologyManagement.DevicesandSystemsManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        iotmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">IOT Management</FONT>>,
            likec4_id="TechnologyManagement.DevicesandSystemsManagement.IOTManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"drilldown":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=drilldown,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    supplychainmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Supply Chain Management</FONT>>,
        likec4_id=SupplyChainManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Partner Management</FONT>>,
        likec4_id=PartnerManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    supplychainmanagement -> partnermanagement [style=invis];
    salesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Sales Management</FONT>>,
        likec4_id=SalesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement -> salesmanagement [style=invis];
    financeandaccountmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Finance and Account Management</FONT>>,
        likec4_id=FinanceandAccountManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    salesmanagement -> financeandaccountmanagement [style=invis];
    manufacturingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Manufacturing Management</FONT>>,
        likec4_id=ManufacturingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Products &amp; Services Management</FONT>>,
        likec4_id=ProductsAndServicesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    manufacturingmanagement -> productsandservicesmanagement [style=invis];
    marketingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Marketing Management</FONT>>,
        likec4_id=MarketingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement -> marketingmanagement [style=invis];
    assetmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Asset Management</FONT>>,
        likec4_id=AssetManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    marketingmanagement -> assetmanagement [style=invis];
    communicationsmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Communications Management</FONT>>,
        likec4_id=CommunicationsManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Security Management</FONT>>,
        likec4_id=SecurityManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    communicationsmanagement -> securitymanagement [style=invis];
    technologymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Technology Management</FONT>>,
        likec4_id=TechnologyManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement -> technologymanagement [style=invis];
    humanresourcemanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Human Resource Management</FONT>>,
        likec4_id=HumanResourceManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    technologymanagement -> humanresourcemanagement [style=invis];
    corporatemanagementandgovernance [height=2.5,
        label=<<FONT POINT-SIZE="19">Corporate Management &amp; Governance</FONT>>,
        likec4_id=CorporateManagementAndGovernance,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case"viewEmployeeDevelopment":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewEmployeeDevelopment,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_employeedevelopment {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMPLOYEE DEVELOPMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="HumanResourceManagement.EmployeeDevelopment",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        employeerecruiting [height=2.5,
            label=<<FONT POINT-SIZE="19">Employee Recruiting</FONT>>,
            likec4_id="HumanResourceManagement.EmployeeDevelopment.EmployeeRecruiting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        employeetraining [height=2.5,
            label=<<FONT POINT-SIZE="19">Employee Training</FONT>>,
            likec4_id="HumanResourceManagement.EmployeeDevelopment.EmployeeTraining",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    employeerecruiting -> employeetraining [style=invis];
}
`;case"viewEnterpriseChangeManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewEnterpriseChangeManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_enterprisechangemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ENTERPRISE CHANGE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.EnterpriseChangeManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        programmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Program Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.EnterpriseChangeManagement.ProgramManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        projectmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Project management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.EnterpriseChangeManagement.Projectmanagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    programmanagement -> projectmanagement [style=invis];
}
`;case"viewFinanceandAccountManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewFinanceandAccountManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_financeandaccountmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FINANCE AND ACCOUNT MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=FinanceandAccountManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            accountspayablemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Accounts Payable Management</FONT>>,
                likec4_id="FinanceandAccountManagement.AccountsPayableManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            accountsreceivablemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Accounts Receivable Management</FONT>>,
                likec4_id="FinanceandAccountManagement.AccountsReceivableManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            taxmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Tax Management</FONT>>,
                likec4_id="FinanceandAccountManagement.TaxManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            equitymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Equity Management</FONT>>,
                likec4_id="FinanceandAccountManagement.EquityManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            expensemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Expense Management</FONT>>,
                likec4_id="FinanceandAccountManagement.ExpenseManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            treasuryandcashmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Treasury and Cash Management</FONT>>,
                likec4_id="FinanceandAccountManagement.TreasuryandCashManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        accountspayablemanagement -> equitymanagement [style=invis];
    }
    accountsreceivablemanagement -> taxmanagement [style=invis];
    taxmanagement -> expensemanagement [style=invis];
    expensemanagement -> treasuryandcashmanagement [style=invis];
}
`;case"viewFleetManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewFleetManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_fleetmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FLEET MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="AssetManagement.FleetManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            fleetacquisition [height=2.5,
                label=<<FONT POINT-SIZE="19">Fleet Acquisition</FONT>>,
                likec4_id="AssetManagement.FleetManagement.FleetAcquisition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            fleetmaintenance [height=2.5,
                label=<<FONT POINT-SIZE="19">Fleet Maintenance</FONT>>,
                likec4_id="AssetManagement.FleetManagement.FleetMaintenance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        fleetsales [height=2.5,
            label=<<FONT POINT-SIZE="19">Fleet Sales</FONT>>,
            likec4_id="AssetManagement.FleetManagement.FleetSales",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        fleetacquisition -> fleetsales [style=invis];
    }
}
`;case"viewHumanResourceManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewHumanResourceManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_humanresourcemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HUMAN RESOURCE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=HumanResourceManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            employeedevelopment [height=2.5,
                label=<<FONT POINT-SIZE="19">Employee Development</FONT>>,
                likec4_id="HumanResourceManagement.EmployeeDevelopment",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            benefitsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Benefits Management</FONT>>,
                likec4_id="HumanResourceManagement.BenefitsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            payrollmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Payroll Management</FONT>>,
                likec4_id="HumanResourceManagement.PayrollManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            employeeinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Employee Information Management</FONT>>,
                likec4_id="HumanResourceManagement.EmployeeInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            hiringmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Hiring Management</FONT>>,
                likec4_id="HumanResourceManagement.HiringManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        employeedevelopment -> employeeinformationmanagement [style=invis];
    }
    benefitsmanagement -> payrollmanagement [style=invis];
    payrollmanagement -> hiringmanagement [style=invis];
}
`;case"viewIntellectualPropertyManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewIntellectualPropertyManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_intellectualpropertymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INTELLECTUAL PROPERTY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.IntellectualPropertyManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        intellectualpropertymanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Intellectual Property Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.IntellectualPropertyManagement.IntellectualPropertyManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        intellectualpropertydefinition [height=2.5,
            label=<<FONT POINT-SIZE="19">Intellectual Property Definition</FONT>>,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.IntellectualPropertyManagement.IntellectualPropertyDefinition",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    intellectualpropertymanagement -> intellectualpropertydefinition [style=invis];
}
`;case"viewInventoryManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewInventoryManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_inventorymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INVENTORY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SupplyChainManagement.InventoryManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            demandandforecasting [height=2.5,
                label=<<FONT POINT-SIZE="19">Demand and Forecasting</FONT>>,
                likec4_id="SupplyChainManagement.InventoryManagement.DemandandForecasting",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            inventoryplanning [height=2.5,
                label=<<FONT POINT-SIZE="19">Inventory Planning</FONT>>,
                likec4_id="SupplyChainManagement.InventoryManagement.InventoryPlanning",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        consignmentinventorymanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Consignment Inventory Management</FONT>>,
            likec4_id="SupplyChainManagement.InventoryManagement.ConsignmentInventoryManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        demandandforecasting -> consignmentinventorymanagement [style=invis];
    }
}
`;case"viewInvestmentManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewInvestmentManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_investmentmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INVESTMENT MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            investmentdefinition [height=2.5,
                label=<<FONT POINT-SIZE="19">Investment Definition</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement.InvestmentDefinition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            investmentriskmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Investment Risk Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement.InvestmentRiskManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            investmentinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Investment Information Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement.InvestmentInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            investmentvaluation [height=2.5,
                label=<<FONT POINT-SIZE="19">Investment Valuation</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement.InvestmentValuation",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        investmentdefinition -> investmentinformationmanagement [style=invis];
    }
    investmentriskmanagement -> investmentvaluation [style=invis];
}
`;case"viewJobManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewJobManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_jobmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>JOB MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="ManufacturingManagement.JobManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        schedulingmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Scheduling Management</FONT>>,
            likec4_id="ManufacturingManagement.JobManagement.SchedulingManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewLegal":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewLegal,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_legal {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>LEGAL</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.Legal",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        policymanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Policy Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.Legal.PolicyManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        contractmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Contract Management</FONT>>,
            likec4_id="CorporateManagementAndGovernance.Legal.ContractManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    policymanagement -> contractmanagement [style=invis];
}
`;case"viewManufacturingManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewManufacturingManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_manufacturingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MANUFACTURING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=ManufacturingManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            jobmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Job Management</FONT>>,
                likec4_id="ManufacturingManagement.JobManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            manufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.ManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            qualityassurance [height=2.5,
                label=<<FONT POINT-SIZE="19">Quality Assurance</FONT>>,
                likec4_id="ManufacturingManagement.QualityAssurance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            rawmaterialmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Raw Material Management</FONT>>,
                likec4_id="ManufacturingManagement.RawMaterialManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            heavymanufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Heavy Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.HeavyManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            lightmanufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Light Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.LightManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        jobmanagement -> rawmaterialmanagement [style=invis];
    }
    manufacturingmanagement -> qualityassurance [style=invis];
    qualityassurance -> heavymanufacturingmanagement [style=invis];
    heavymanufacturingmanagement -> lightmanufacturingmanagement [style=invis];
}
`;case"viewMarketingManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewMarketingManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_marketingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MARKETING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=MarketingManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        brandmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Brand Management</FONT>>,
            likec4_id="MarketingManagement.BrandManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        campaignmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Campaign Management</FONT>>,
            likec4_id="MarketingManagement.CampaignManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    brandmanagement -> campaignmanagement [style=invis];
}
`;case"viewPartnerManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewPartnerManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_partnermanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PARTNER MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=PartnerManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        suppliermanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Supplier Management</FONT>>,
            likec4_id="PartnerManagement.SupplierManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        customermanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Customer Management</FONT>>,
            likec4_id="PartnerManagement.CustomerManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    suppliermanagement -> customermanagement [style=invis];
}
`;case"viewPhysicalSecurityManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewPhysicalSecurityManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_physicalsecuritymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PHYSICAL SECURITY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SecurityManagement.PhysicalSecurityManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        lossprevention [height=2.5,
            label=<<FONT POINT-SIZE="19">Loss Prevention</FONT>>,
            likec4_id="SecurityManagement.PhysicalSecurityManagement.LossPrevention",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewProductInformationManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewProductInformationManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_productinformationmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PRODUCT INFORMATION MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="ProductsAndServicesManagement.ProductInformationManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            crossreferencemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Cross Reference Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement.CrossReferenceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            productattributemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Product Attribute Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement.ProductAttributeManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            digitalassetmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Digital Asset Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement.DigitalAssetManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            producttaxonomymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Product Taxonomy Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement.ProductTaxonomyManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        crossreferencemanagement -> digitalassetmanagement [style=invis];
    }
    productattributemanagement -> producttaxonomymanagement [style=invis];
}
`;case"viewProductLineManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewProductLineManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_productlinemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PRODUCT LINE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="ProductsAndServicesManagement.ProductLineManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        productdevelopment [height=2.5,
            label=<<FONT POINT-SIZE="19">Product Development</FONT>>,
            likec4_id="ProductsAndServicesManagement.ProductLineManagement.ProductDevelopment",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"viewProductsAndServicesManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewProductsAndServicesManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_productsandservicesmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PRODUCTS &amp; SERVICES MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=ProductsAndServicesManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            servicesmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Services Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ServicesManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            printservicesmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Print Services Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.PrintServicesManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            catalogmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Catalog Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.CatalogManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            productlinemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Product Line Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductLineManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            productinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Product Information Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        servicesmanagement -> productlinemanagement [style=invis];
    }
    printservicesmanagement -> catalogmanagement [style=invis];
    catalogmanagement -> productinformationmanagement [style=invis];
}
`;case"viewPropertyManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewPropertyManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_propertymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PROPERTY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="AssetManagement.PropertyManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            constructionmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Construction Management</FONT>>,
                likec4_id="AssetManagement.PropertyManagement.ConstructionManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            leasemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Lease Management</FONT>>,
                likec4_id="AssetManagement.PropertyManagement.LeaseManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            occupancymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Occupancy Management</FONT>>,
                likec4_id="AssetManagement.PropertyManagement.OccupancyManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            facilitymaintenance [height=2.5,
                label=<<FONT POINT-SIZE="19">Facility Maintenance</FONT>>,
                likec4_id="AssetManagement.PropertyManagement.FacilityMaintenance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        constructionmanagement -> occupancymanagement [style=invis];
    }
    leasemanagement -> facilitymaintenance [style=invis];
}
`;case"viewSalesChannelManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSalesChannelManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_saleschannelmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SALES CHANNEL MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SalesManagement.SalesChannelManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        merchandising [height=2.5,
            label=<<FONT POINT-SIZE="19">Merchandising</FONT>>,
            likec4_id="SalesManagement.SalesChannelManagement.Merchandising",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        promosandincentives [height=2.5,
            label=<<FONT POINT-SIZE="19">Promos and Incentives</FONT>>,
            likec4_id="SalesManagement.SalesChannelManagement.PromosandIncentives",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    merchandising -> promosandincentives [style=invis];
}
`;case"viewSalesInformationManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSalesInformationManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_salesinformationmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SALES INFORMATION MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SalesManagement.SalesInformationManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        bookofbusinessmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Book Of Business Management</FONT>>,
            likec4_id="SalesManagement.SalesInformationManagement.BookOfBusinessManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        salesterritoriesmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Sales Territories Management</FONT>>,
            likec4_id="SalesManagement.SalesInformationManagement.SalesTerritoriesManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    bookofbusinessmanagement -> salesterritoriesmanagement [style=invis];
}
`;case"viewSalesManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSalesManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_salesmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SALES MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SalesManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            saleschannelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Sales Channel Management</FONT>>,
                likec4_id="SalesManagement.SalesChannelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            salesinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Sales Information Management</FONT>>,
                likec4_id="SalesManagement.SalesInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            crosschannelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Cross Channel Management</FONT>>,
                likec4_id="SalesManagement.CrossChannelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            salesordermanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Sales Order Management</FONT>>,
                likec4_id="SalesManagement.SalesOrderManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            pricingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Pricing Management</FONT>>,
                likec4_id="SalesManagement.PricingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        saleschannelmanagement -> salesordermanagement [style=invis];
    }
    salesinformationmanagement -> crosschannelmanagement [style=invis];
    crosschannelmanagement -> pricingmanagement [style=invis];
}
`;case"viewSalesOrderManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSalesOrderManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_salesordermanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SALES ORDER MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SalesManagement.SalesOrderManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            billingandinvoicing [height=2.5,
                label=<<FONT POINT-SIZE="19">Billing and Invoicing</FONT>>,
                likec4_id="SalesManagement.SalesOrderManagement.BillingandInvoicing",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            customerquotemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Customer Quote Management</FONT>>,
                likec4_id="SalesManagement.SalesOrderManagement.CustomerQuoteManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        fulfillmentmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Fulfillment Management</FONT>>,
            likec4_id="SalesManagement.SalesOrderManagement.FulfillmentManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        billingandinvoicing -> fulfillmentmanagement [style=invis];
    }
}
`;case"viewSecurityManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSecurityManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_securitymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECURITY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SecurityManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        itsecurityandriskmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">IT Security and Risk Management</FONT>>,
            likec4_id="SecurityManagement.ITSecurityandRiskManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        physicalsecuritymanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Physical Security Management</FONT>>,
            likec4_id="SecurityManagement.PhysicalSecurityManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    itsecurityandriskmanagement -> physicalsecuritymanagement [style=invis];
}
`;case"viewSourcingManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSourcingManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_sourcingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SOURCING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SupplyChainManagement.SourcingManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        supplierquoting [height=2.5,
            label=<<FONT POINT-SIZE="19">Supplier Quoting</FONT>>,
            likec4_id="SupplyChainManagement.SourcingManagement.SupplierQuoting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cogsmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">COGS Management</FONT>>,
            likec4_id="SupplyChainManagement.SourcingManagement.COGSManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    supplierquoting -> cogsmanagement [style=invis];
}
`;case"viewStrategyManagement2":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewStrategyManagement2,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_strategymanagement2 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STRATEGY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            businessentitymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Business Entity Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.BusinessEntityManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            strategymanagement3 [height=2.5,
                label=<<FONT POINT-SIZE="19">Strategy Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            investmentmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Investment Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.InvestmentManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            intellectualpropertymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Intellectual Property Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.IntellectualPropertyManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        businessentitymanagement -> investmentmanagement [style=invis];
    }
    strategymanagement3 -> intellectualpropertymanagement [style=invis];
}
`;case"viewStrategyManagement3":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewStrategyManagement3,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_strategymanagement3 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STRATEGY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            objectivemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Objective Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.ObjectiveManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            goaldefinition [height=2.5,
                label=<<FONT POINT-SIZE="19">Goal Definition</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.GoalDefinition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            actionitemdefinition [height=2.5,
                label=<<FONT POINT-SIZE="19">Action Item Definition</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.ActionItemDefinition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            strategyinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Strategy information management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.Strategyinformationmanagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            strategydefinition [height=2.5,
                label=<<FONT POINT-SIZE="19">Strategy Definition</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.StrategyDefinition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            visiondefinition [height=2.5,
                label=<<FONT POINT-SIZE="19">Vision Definition</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.VisionDefinition",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            strategyriskmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Strategy Risk Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.StrategyRiskManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            pricingstrategymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Pricing Strategy Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2.StrategyManagement3.PricingStrategyManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        objectivemanagement -> strategyinformationmanagement [minlen=1,
            style=invis];
        strategyinformationmanagement -> strategyriskmanagement [minlen=1,
            style=invis];
    }
    goaldefinition -> actionitemdefinition [style=invis];
    actionitemdefinition -> strategydefinition [style=invis];
    strategydefinition -> visiondefinition [style=invis];
}
`;case"viewSupplierManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSupplierManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_suppliermanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SUPPLIER MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="PartnerManagement.SupplierManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            supplierinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Supplier Information Management</FONT>>,
                likec4_id="PartnerManagement.SupplierManagement.SupplierInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            supplierqualitymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Supplier Quality Management</FONT>>,
                likec4_id="PartnerManagement.SupplierManagement.SupplierQualityManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            supplierrelationshipmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Supplier Relationship Management</FONT>>,
                likec4_id="PartnerManagement.SupplierManagement.SupplierRelationshipManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            supplierriskmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Supplier Risk Management</FONT>>,
                likec4_id="PartnerManagement.SupplierManagement.SupplierRiskManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        supplierinformationmanagement -> supplierrelationshipmanagement [style=invis];
    }
    supplierqualitymanagement -> supplierriskmanagement [style=invis];
}
`;case"viewSupplyChainManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewSupplyChainManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_supplychainmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SUPPLY CHAIN MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SupplyChainManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            inventorymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Inventory Management</FONT>>,
                likec4_id="SupplyChainManagement.InventoryManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            warehousingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Warehousing Management</FONT>>,
                likec4_id="SupplyChainManagement.WarehousingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            transportationand3rdpartylogisticsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Transportation and 3rd Party<BR/>Logistics Management</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            sourcingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Sourcing Management</FONT>>,
                likec4_id="SupplyChainManagement.SourcingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            supplychainplanning [height=2.5,
                label=<<FONT POINT-SIZE="19">Supply Chain Planning</FONT>>,
                likec4_id="SupplyChainManagement.SupplyChainPlanning",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            procurement [height=2.5,
                label=<<FONT POINT-SIZE="19">Procurement</FONT>>,
                likec4_id="SupplyChainManagement.Procurement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        inventorymanagement -> sourcingmanagement [minlen=1,
            style=invis];
        supplychaingovernanceandriskmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Supply Chain Governance and Risk<BR/>Management</FONT>>,
            likec4_id="SupplyChainManagement.SupplyChainGovernanceandRiskManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        sourcingmanagement -> supplychaingovernanceandriskmanagement [minlen=1,
            style=invis];
    }
    warehousingmanagement -> transportationand3rdpartylogisticsmanagement [style=invis];
    transportationand3rdpartylogisticsmanagement -> supplychainplanning [style=invis];
    supplychainplanning -> procurement [style=invis];
}
`;case"viewTechnologyManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewTechnologyManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_technologymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TECHNOLOGY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=TechnologyManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            devicesandsystemsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Devices and Systems Management</FONT>>,
                likec4_id="TechnologyManagement.DevicesandSystemsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            itarchitecture [height=2.5,
                label=<<FONT POINT-SIZE="19">IT Architecture</FONT>>,
                likec4_id="TechnologyManagement.ITArchitecture",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            itsupportmanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">IT Support Management</FONT>>,
                likec4_id="TechnologyManagement.ITSupportManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            itportfoliomanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">IT Portfolio Management</FONT>>,
                likec4_id="TechnologyManagement.ITPortfolioManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            softwaredeliverymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Software Delivery Management</FONT>>,
                likec4_id="TechnologyManagement.SoftwareDeliveryManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        devicesandsystemsmanagement -> itportfoliomanagement [style=invis];
    }
    itarchitecture -> itsupportmanagement [style=invis];
    itsupportmanagement -> softwaredeliverymanagement [style=invis];
}
`;case"viewTransportation3rdPartLogisticsManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewTransportation3rdPartLogisticsManagement,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_transportationand3rdpartylogisticsmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TRANSPORTATION AND 3RD PARTY LOGISTICS MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            "third-partycarriermanagement" [height=2.5,
                label=<<FONT POINT-SIZE="19">Third-Party Carrier Management</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.Third-PartyCarrierManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            truckroutemanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Truck Route Management</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.TruckRouteManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            transportationregulatorycompliance [height=2.5,
                label=<<FONT POINT-SIZE="19">Transportation Regulatory<BR/>Compliance</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.TransportationRegulatoryCompliance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            deliverymanagement [height=2.5,
                label=<<FONT POINT-SIZE="19">Delivery Management</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement.DeliveryManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        "third-partycarriermanagement" -> transportationregulatorycompliance [style=invis];
    }
    truckroutemanagement -> deliverymanagement [style=invis];
}
`;case"viewWarehousingManagement":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=viewWarehousingManagement,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_warehousingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WAREHOUSING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="SupplyChainManagement.WarehousingManagement",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        slotmanagement [height=2.5,
            label=<<FONT POINT-SIZE="19">Slot Management</FONT>>,
            likec4_id="SupplyChainManagement.WarehousingManagement.SlotManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case"level1capabilities":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=level1capabilities,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    supplychainmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Supply Chain Management</FONT>>,
        likec4_id=SupplyChainManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Partner Management</FONT>>,
        likec4_id=PartnerManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    supplychainmanagement -> partnermanagement [style=invis];
    salesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Sales Management</FONT>>,
        likec4_id=SalesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    partnermanagement -> salesmanagement [style=invis];
    financeandaccountmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Finance and Account Management</FONT>>,
        likec4_id=FinanceandAccountManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    salesmanagement -> financeandaccountmanagement [style=invis];
    manufacturingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Manufacturing Management</FONT>>,
        likec4_id=ManufacturingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Products &amp; Services Management</FONT>>,
        likec4_id=ProductsAndServicesManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    manufacturingmanagement -> productsandservicesmanagement [style=invis];
    marketingmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Marketing Management</FONT>>,
        likec4_id=MarketingManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    productsandservicesmanagement -> marketingmanagement [style=invis];
    assetmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Asset Management</FONT>>,
        likec4_id=AssetManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    marketingmanagement -> assetmanagement [style=invis];
    communicationsmanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Communications Management</FONT>>,
        likec4_id=CommunicationsManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Security Management</FONT>>,
        likec4_id=SecurityManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    communicationsmanagement -> securitymanagement [style=invis];
    technologymanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Technology Management</FONT>>,
        likec4_id=TechnologyManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    securitymanagement -> technologymanagement [style=invis];
    humanresourcemanagement [height=2.5,
        label=<<FONT POINT-SIZE="19">Human Resource Management</FONT>>,
        likec4_id=HumanResourceManagement,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    technologymanagement -> humanresourcemanagement [style=invis];
    corporatemanagementandgovernance [height=2.5,
        label=<<FONT POINT-SIZE="19">Corporate Management &amp; Governance</FONT>>,
        likec4_id=CorporateManagementAndGovernance,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case"level1and2capabilities":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=level1and2capabilities,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_supplychainmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SUPPLY CHAIN MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SupplyChainManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            inventorymanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Inventory Management</FONT>>,
                likec4_id="SupplyChainManagement.InventoryManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            warehousingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Warehousing Management</FONT>>,
                likec4_id="SupplyChainManagement.WarehousingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            transportationand3rdpartylogisticsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Transportation and 3rd Party<BR/>Logistics Management</FONT>>,
                likec4_id="SupplyChainManagement.Transportationand3rdPartyLogisticsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            sourcingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Sourcing Management</FONT>>,
                likec4_id="SupplyChainManagement.SourcingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            supplychainplanning [height=2.5,
                label=<<FONT POINT-SIZE="32">Supply Chain Planning</FONT>>,
                likec4_id="SupplyChainManagement.SupplyChainPlanning",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            procurement [height=2.5,
                label=<<FONT POINT-SIZE="32">Procurement</FONT>>,
                likec4_id="SupplyChainManagement.Procurement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        inventorymanagement -> sourcingmanagement [minlen=1,
            style=invis];
        supplychaingovernanceandriskmanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Supply Chain Governance and Risk<BR/>Management</FONT>>,
            likec4_id="SupplyChainManagement.SupplyChainGovernanceandRiskManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        sourcingmanagement -> supplychaingovernanceandriskmanagement [minlen=1,
            style=invis];
    }
    subgraph cluster_partnermanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PARTNER MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=PartnerManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        suppliermanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Supplier Management</FONT>>,
            likec4_id="PartnerManagement.SupplierManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        customermanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Customer Management</FONT>>,
            likec4_id="PartnerManagement.CustomerManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_salesmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SALES MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SalesManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            saleschannelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Sales Channel Management</FONT>>,
                likec4_id="SalesManagement.SalesChannelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            salesinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Sales Information Management</FONT>>,
                likec4_id="SalesManagement.SalesInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            crosschannelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Cross Channel Management</FONT>>,
                likec4_id="SalesManagement.CrossChannelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            salesordermanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Sales Order Management</FONT>>,
                likec4_id="SalesManagement.SalesOrderManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            pricingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Pricing Management</FONT>>,
                likec4_id="SalesManagement.PricingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        saleschannelmanagement -> salesordermanagement [style=invis];
    }
    subgraph cluster_financeandaccountmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FINANCE AND ACCOUNT MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=FinanceandAccountManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            accountspayablemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Accounts Payable Management</FONT>>,
                likec4_id="FinanceandAccountManagement.AccountsPayableManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            accountsreceivablemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Accounts Receivable Management</FONT>>,
                likec4_id="FinanceandAccountManagement.AccountsReceivableManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            taxmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Tax Management</FONT>>,
                likec4_id="FinanceandAccountManagement.TaxManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            equitymanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Equity Management</FONT>>,
                likec4_id="FinanceandAccountManagement.EquityManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            expensemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Expense Management</FONT>>,
                likec4_id="FinanceandAccountManagement.ExpenseManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            treasuryandcashmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Treasury and Cash Management</FONT>>,
                likec4_id="FinanceandAccountManagement.TreasuryandCashManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        accountspayablemanagement -> equitymanagement [style=invis];
    }
    subgraph cluster_manufacturingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MANUFACTURING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=ManufacturingManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            jobmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Job Management</FONT>>,
                likec4_id="ManufacturingManagement.JobManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            manufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.ManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            qualityassurance [height=2.5,
                label=<<FONT POINT-SIZE="32">Quality Assurance</FONT>>,
                likec4_id="ManufacturingManagement.QualityAssurance",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            rawmaterialmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Raw Material Management</FONT>>,
                likec4_id="ManufacturingManagement.RawMaterialManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            heavymanufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Heavy Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.HeavyManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            lightmanufacturingmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Light Manufacturing Management</FONT>>,
                likec4_id="ManufacturingManagement.LightManufacturingManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        jobmanagement -> rawmaterialmanagement [style=invis];
    }
    subgraph cluster_productsandservicesmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PRODUCTS &amp; SERVICES MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=ProductsAndServicesManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            servicesmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Services Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ServicesManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            printservicesmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Print Services Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.PrintServicesManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            catalogmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Catalog Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.CatalogManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            productlinemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Product Line Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductLineManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            productinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Product Information Management</FONT>>,
                likec4_id="ProductsAndServicesManagement.ProductInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        servicesmanagement -> productlinemanagement [style=invis];
    }
    subgraph cluster_marketingmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MARKETING MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=MarketingManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        brandmanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Brand Management</FONT>>,
            likec4_id="MarketingManagement.BrandManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        campaignmanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Campaign Management</FONT>>,
            likec4_id="MarketingManagement.CampaignManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_assetmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ASSET MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=AssetManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            assetinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Asset Information Management</FONT>>,
                likec4_id="AssetManagement.AssetInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            fleetmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Fleet Management</FONT>>,
                likec4_id="AssetManagement.FleetManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        propertymanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Property Management</FONT>>,
            likec4_id="AssetManagement.PropertyManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        assetinformationmanagement -> propertymanagement [style=invis];
    }
    subgraph cluster_communicationsmanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>COMMUNICATIONS MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=CommunicationsManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            organizationalcommunicationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Organizational Communication<BR/>Management</FONT>>,
                likec4_id="CommunicationsManagement.OrganizationalCommunicationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            externalcommunicationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">External Communication Management</FONT>>,
                likec4_id="CommunicationsManagement.ExternalCommunicationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        publicrelations [height=2.5,
            label=<<FONT POINT-SIZE="32">Public Relations</FONT>>,
            likec4_id="CommunicationsManagement.PublicRelations",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        organizationalcommunicationmanagement -> publicrelations [style=invis];
    }
    subgraph cluster_securitymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECURITY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=SecurityManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        itsecurityandriskmanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">IT Security and Risk Management</FONT>>,
            likec4_id="SecurityManagement.ITSecurityandRiskManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        physicalsecuritymanagement [height=2.5,
            label=<<FONT POINT-SIZE="32">Physical Security Management</FONT>>,
            likec4_id="SecurityManagement.PhysicalSecurityManagement",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_technologymanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TECHNOLOGY MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=TechnologyManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            devicesandsystemsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Devices and Systems Management</FONT>>,
                likec4_id="TechnologyManagement.DevicesandSystemsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            itarchitecture [height=2.5,
                label=<<FONT POINT-SIZE="32">IT Architecture</FONT>>,
                likec4_id="TechnologyManagement.ITArchitecture",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            itsupportmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">IT Support Management</FONT>>,
                likec4_id="TechnologyManagement.ITSupportManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            itportfoliomanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">IT Portfolio Management</FONT>>,
                likec4_id="TechnologyManagement.ITPortfolioManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            softwaredeliverymanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Software Delivery Management</FONT>>,
                likec4_id="TechnologyManagement.SoftwareDeliveryManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        devicesandsystemsmanagement -> itportfoliomanagement [style=invis];
    }
    subgraph cluster_humanresourcemanagement {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HUMAN RESOURCE MANAGEMENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=HumanResourceManagement,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            employeedevelopment [height=2.5,
                label=<<FONT POINT-SIZE="32">Employee Development</FONT>>,
                likec4_id="HumanResourceManagement.EmployeeDevelopment",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            benefitsmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Benefits Management</FONT>>,
                likec4_id="HumanResourceManagement.BenefitsManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            payrollmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Payroll Management</FONT>>,
                likec4_id="HumanResourceManagement.PayrollManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            employeeinformationmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Employee Information Management</FONT>>,
                likec4_id="HumanResourceManagement.EmployeeInformationManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            hiringmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Hiring Management</FONT>>,
                likec4_id="HumanResourceManagement.HiringManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        employeedevelopment -> employeeinformationmanagement [style=invis];
    }
    subgraph cluster_corporatemanagementandgovernance {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CORPORATE MANAGEMENT &amp; GOVERNANCE</B></FONT>>,
            likec4_depth=1,
            likec4_id=CorporateManagementAndGovernance,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            legal [height=2.5,
                label=<<FONT POINT-SIZE="32">Legal</FONT>>,
                likec4_id="CorporateManagementAndGovernance.Legal",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            corporateplanning [height=2.5,
                label=<<FONT POINT-SIZE="32">Corporate Planning</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporatePlanning",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            orgstructuremanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Org Structure Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.OrgStructureManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            eventmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Event  Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.EventManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            travelmanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Travel Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.TravelManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            enterprisechangemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Enterprise Change Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.EnterpriseChangeManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            corporategovernancemanagement [height=2.5,
                label=<<FONT POINT-SIZE="32">Corporate Governance Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.CorporateGovernanceManagement",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            strategymanagement2 [height=2.5,
                label=<<FONT POINT-SIZE="32">Strategy Management</FONT>>,
                likec4_id="CorporateManagementAndGovernance.StrategyManagement2",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        legal -> eventmanagement [minlen=1,
            style=invis];
        eventmanagement -> corporategovernancemanagement [minlen=1,
            style=invis];
    }
    warehousingmanagement -> transportationand3rdpartylogisticsmanagement [style=invis];
    transportationand3rdpartylogisticsmanagement -> supplychainplanning [style=invis];
    supplychainplanning -> procurement [style=invis];
    suppliermanagement -> customermanagement [style=invis];
    customermanagement -> salesinformationmanagement [style=invis];
    salesinformationmanagement -> crosschannelmanagement [style=invis];
    pricingmanagement -> accountsreceivablemanagement [style=invis];
    accountsreceivablemanagement -> taxmanagement [style=invis];
    taxmanagement -> expensemanagement [style=invis];
    treasuryandcashmanagement -> manufacturingmanagement [style=invis];
    manufacturingmanagement -> qualityassurance [style=invis];
    qualityassurance -> heavymanufacturingmanagement [style=invis];
    lightmanufacturingmanagement -> printservicesmanagement [style=invis];
    printservicesmanagement -> catalogmanagement [style=invis];
    catalogmanagement -> productinformationmanagement [style=invis];
    brandmanagement -> campaignmanagement [style=invis];
    campaignmanagement -> fleetmanagement [style=invis];
    fleetmanagement -> externalcommunicationmanagement [style=invis];
    itsecurityandriskmanagement -> physicalsecuritymanagement [style=invis];
    physicalsecuritymanagement -> itarchitecture [style=invis];
    itarchitecture -> itsupportmanagement [style=invis];
    softwaredeliverymanagement -> benefitsmanagement [style=invis];
    benefitsmanagement -> payrollmanagement [style=invis];
    payrollmanagement -> hiringmanagement [style=invis];
    corporateplanning -> orgstructuremanagement [style=invis];
    orgstructuremanagement -> travelmanagement [style=invis];
    travelmanagement -> enterprisechangemanagement [style=invis];
}
`;default:throw new Error("Unknown viewId: "+n)}}function t(n){switch(n){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1686pt" height="1110pt"
 viewBox="0.00 0.00 1686.25 1110.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- supplychainmanagement -->
<g id="node1" class="node">
<title>supplychainmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-1080 3.38,-1080 3.38,-900 323.42,-900 323.42,-1080"/>
<text text-anchor="start" x="48.8" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supply Chain Management</text>
</g>
<!-- partnermanagement -->
<g id="node2" class="node">
<title>partnermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-780 3.38,-780 3.38,-600 323.42,-600 323.42,-780"/>
<text text-anchor="start" x="74.16" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Partner Management</text>
</g>
<!-- salesmanagement -->
<g id="node3" class="node">
<title>salesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-480 3.38,-480 3.38,-300 323.42,-300 323.42,-480"/>
<text text-anchor="start" x="81.54" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Management</text>
</g>
<!-- financeandaccountmanagement -->
<g id="node4" class="node">
<title>financeandaccountmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="326.8,-180 0,-180 0,0 326.8,0 326.8,-180"/>
<text text-anchor="start" x="16.06" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Finance and Account Management</text>
</g>
<!-- manufacturingmanagement -->
<g id="node5" class="node">
<title>manufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-1080 436.38,-1080 436.38,-900 756.42,-900 756.42,-1080"/>
<text text-anchor="start" x="478.11" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Manufacturing Management</text>
</g>
<!-- productsandservicesmanagement -->
<g id="node6" class="node">
<title>productsandservicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-780 436.38,-780 436.38,-600 756.42,-600 756.42,-780"/>
<text text-anchor="start" x="452.78" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Products &amp; Services Management</text>
</g>
<!-- marketingmanagement -->
<g id="node7" class="node">
<title>marketingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-480 436.38,-480 436.38,-300 756.42,-300 756.42,-480"/>
<text text-anchor="start" x="496.6" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Marketing Management</text>
</g>
<!-- assetmanagement -->
<g id="node8" class="node">
<title>assetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-180 436.38,-180 436.38,0 756.42,0 756.42,-180"/>
<text text-anchor="start" x="514.55" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Asset Management</text>
</g>
<!-- communicationsmanagement -->
<g id="node9" class="node">
<title>communicationsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-1080 866.38,-1080 866.38,-900 1186.42,-900 1186.42,-1080"/>
<text text-anchor="start" x="897.56" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Communications Management</text>
</g>
<!-- securitymanagement -->
<g id="node10" class="node">
<title>securitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-780 866.38,-780 866.38,-600 1186.42,-600 1186.42,-780"/>
<text text-anchor="start" x="933.99" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Security Management</text>
</g>
<!-- technologymanagement -->
<g id="node11" class="node">
<title>technologymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-480 866.38,-480 866.38,-300 1186.42,-300 1186.42,-480"/>
<text text-anchor="start" x="919.19" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Technology Management</text>
</g>
<!-- humanresourcemanagement -->
<g id="node12" class="node">
<title>humanresourcemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-180 866.38,-180 866.38,0 1186.42,0 1186.42,-180"/>
<text text-anchor="start" x="894.39" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Human Resource Management</text>
</g>
<!-- corporatemanagementandgovernance -->
<g id="node13" class="node">
<title>corporatemanagementandgovernance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1656.16,-1080 1296.64,-1080 1296.64,-900 1656.16,-900 1656.16,-1080"/>
<text text-anchor="start" x="1312.7" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Corporate Management &amp; Governance</text>
</g>
<!-- supplychainmanagement&#45;&gt;partnermanagement -->
<!-- partnermanagement&#45;&gt;salesmanagement -->
<!-- salesmanagement&#45;&gt;financeandaccountmanagement -->
<!-- manufacturingmanagement&#45;&gt;productsandservicesmanagement -->
<!-- productsandservicesmanagement&#45;&gt;marketingmanagement -->
<!-- marketingmanagement&#45;&gt;assetmanagement -->
<!-- communicationsmanagement&#45;&gt;securitymanagement -->
<!-- securitymanagement&#45;&gt;technologymanagement -->
<!-- technologymanagement&#45;&gt;humanresourcemanagement -->
</g>
</svg>
`;case"viewAccountsPayableManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_accountspayablemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACCOUNTS PAYABLE MANAGEMENT</text>
</g>
<!-- invoicemanagement -->
<g id="node1" class="node">
<title>invoicemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="119.81" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Invoice Management</text>
</g>
<!-- paymentmanagement -->
<g id="node2" class="node">
<title>paymentmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="112.42" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Payment Management</text>
</g>
<!-- invoicemanagement&#45;&gt;paymentmanagement -->
</g>
</svg>
`;case"viewAccountsReceivableManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_accountsreceivablemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACCOUNTS RECEIVABLE MANAGEMENT</text>
</g>
<!-- collections -->
<g id="node1" class="node">
<title>collections</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="153.53" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Collections</text>
</g>
</g>
</svg>
`;case"viewAssetManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_assetmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ASSET MANAGEMENT</text>
</g>
<!-- assetinformationmanagement -->
<g id="node1" class="node">
<title>assetinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="75.99" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Asset Information Management</text>
</g>
<!-- fleetmanagement -->
<g id="node2" class="node">
<title>fleetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="558.79" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Fleet Management</text>
</g>
<!-- propertymanagement -->
<g id="node3" class="node">
<title>propertymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="114.01" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Property Management</text>
</g>
<!-- assetinformationmanagement&#45;&gt;propertymanagement -->
</g>
</svg>
`;case"viewBrandManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_brandmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAND MANAGEMENT</text>
</g>
<!-- socialmediamanagement -->
<g id="node1" class="node">
<title>socialmediamanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="95.52" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Social Media Management</text>
</g>
<!-- tradeshowmanagement -->
<g id="node2" class="node">
<title>tradeshowmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="532.92" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Tradeshow Management</text>
</g>
<!-- brandpartnershipmanagement -->
<g id="node3" class="node">
<title>brandpartnershipmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="73.34" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Brand Partnership Management</text>
</g>
<!-- socialmediamanagement&#45;&gt;brandpartnershipmanagement -->
</g>
</svg>
`;case"viewBusinessEntityInformationManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="466pt" height="311pt"
 viewBox="0.00 0.00 466.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_businessentityinformationmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 428,-273.2 428,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BUSINESS ENTITY INFORMATION MANAGEMENT</text>
</g>
<!-- businessentitylocationmanagement -->
<g id="node1" class="node">
<title>businessentitylocationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="395.65,-220 40.35,-220 40.35,-40 395.65,-40 395.65,-220"/>
<text text-anchor="start" x="56.41" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Location Management</text>
</g>
</g>
</svg>
`;case"viewBusinessEntityLocationManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="466pt" height="311pt"
 viewBox="0.00 0.00 466.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_businessentityinformationmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 428,-273.2 428,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BUSINESS ENTITY INFORMATION MANAGEMENT</text>
</g>
<!-- businessentitylocationmanagement -->
<g id="node1" class="node">
<title>businessentitylocationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="395.65,-220 40.35,-220 40.35,-40 395.65,-40 395.65,-220"/>
<text text-anchor="start" x="56.41" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Location Management</text>
</g>
</g>
</svg>
`;case"viewBusinessEntityManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_businessentitymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BUSINESS ENTITY MANAGEMENT</text>
</g>
<!-- businessentityinformationmanagement -->
<g id="node1" class="node">
<title>businessentityinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="92.89" y="-443.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Information</text>
<text text-anchor="start" x="152.55" y="-420.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- businessentityperformancemanagement -->
<g id="node2" class="node">
<title>businessentityperformancemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="516.03" y="-443.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Performance</text>
<text text-anchor="start" x="582.55" y="-420.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- businessentitycapitalstructuremanagement -->
<g id="node3" class="node">
<title>businessentitycapitalstructuremanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="69.66" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Capital Structure</text>
<text text-anchor="start" x="152.55" y="-120.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- businessentityriskmanagement -->
<g id="node4" class="node">
<title>businessentityriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.2,-228 477.8,-228 477.8,-48 798.2,-48 798.2,-228"/>
<text text-anchor="start" x="493.85" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Risk Management</text>
</g>
<!-- businessentityinformationmanagement&#45;&gt;businessentitycapitalstructuremanagement -->
<!-- businessentityperformancemanagement&#45;&gt;businessentityriskmanagement -->
</g>
</svg>
`;case"viewCommunicationsManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="912pt" height="627pt"
 viewBox="0.00 0.00 912.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_communicationsmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 874,-589.2 874,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">COMMUNICATIONS MANAGEMENT</text>
</g>
<!-- organizationalcommunicationmanagement -->
<g id="node1" class="node">
<title>organizationalcommunicationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="78.1" y="-443.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Organizational Communication</text>
<text text-anchor="start" x="152.55" y="-420.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- externalcommunicationmanagement -->
<g id="node2" class="node">
<title>externalcommunicationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="833.63,-528 478.37,-528 478.37,-348 833.63,-348 833.63,-528"/>
<text text-anchor="start" x="494.42" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">External Communication Management</text>
</g>
<!-- publicrelations -->
<g id="node3" class="node">
<title>publicrelations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="139.88" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Public Relations</text>
</g>
<!-- organizationalcommunicationmanagement&#45;&gt;publicrelations -->
</g>
</svg>
`;case"viewContractManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="927pt"
 viewBox="0.00 0.00 1306.10 927.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 912.25)">
<g id="clust1" class="cluster">
<title>cluster_contractmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 1268,-889.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONTRACT MANAGEMENT</text>
</g>
<!-- customercontractmanagement -->
<g id="node1" class="node">
<title>customercontractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text text-anchor="start" x="70.19" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Contract Management</text>
</g>
<!-- contractinformationmanagement -->
<g id="node2" class="node">
<title>contractinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.21,-828 477.79,-828 477.79,-648 798.21,-648 798.21,-828"/>
<text text-anchor="start" x="493.84" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Contract Information Management</text>
</g>
<!-- itcontractmanagement -->
<g id="node3" class="node">
<title>itcontractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-828 907.98,-828 907.98,-648 1228.02,-648 1228.02,-828"/>
<text text-anchor="start" x="962.92" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IT Contract Management</text>
</g>
<!-- brandpartnermanagement -->
<g id="node4" class="node">
<title>brandpartnermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="88.13" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Brand Partner &#160;Management</text>
</g>
<!-- serviceprovidercontractmanagement -->
<g id="node5" class="node">
<title>serviceprovidercontractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="529.77" y="-443.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Service Provider Contract</text>
<text text-anchor="start" x="582.55" y="-420.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- propertycontractmanagement -->
<g id="node6" class="node">
<title>propertycontractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="935.46" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Property Contract Management</text>
</g>
<!-- suppliercontractmanagement -->
<g id="node7" class="node">
<title>suppliercontractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="76.51" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Contract Management</text>
</g>
<!-- customercontractmanagement&#45;&gt;brandpartnermanagement -->
<!-- contractinformationmanagement&#45;&gt;itcontractmanagement -->
<!-- itcontractmanagement&#45;&gt;serviceprovidercontractmanagement -->
<!-- brandpartnermanagement&#45;&gt;suppliercontractmanagement -->
<!-- serviceprovidercontractmanagement&#45;&gt;propertycontractmanagement -->
</g>
</svg>
`;case"viewCorporateGovernanceManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_corporategovernancemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CORPORATE GOVERNANCE MANAGEMENT</text>
</g>
<!-- performancemanagement -->
<g id="node1" class="node">
<title>performancemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="95.53" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Performance Management</text>
</g>
<!-- regulatorycompliance -->
<g id="node2" class="node">
<title>regulatorycompliance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="539.26" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Regulatory Compliance</text>
</g>
<!-- enterpriseriskmanagement -->
<g id="node3" class="node">
<title>enterpriseriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="85.5" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Enterprise Risk Management</text>
</g>
<!-- esgmanagement -->
<g id="node4" class="node">
<title>esgmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="559.85" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">ESG Management</text>
</g>
<!-- performancemanagement&#45;&gt;enterpriseriskmanagement -->
<!-- regulatorycompliance&#45;&gt;esgmanagement -->
</g>
</svg>
`;case"viewCorporateManagementAndGovernance":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="927pt"
 viewBox="0.00 0.00 1306.10 927.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 912.25)">
<g id="clust1" class="cluster">
<title>cluster_corporatemanagementandgovernance</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 1268,-889.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CORPORATE MANAGEMENT &amp; GOVERNANCE</text>
</g>
<!-- legal -->
<g id="node1" class="node">
<title>legal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text text-anchor="start" x="184.76" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Legal</text>
</g>
<!-- corporateplanning -->
<g id="node2" class="node">
<title>corporateplanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text text-anchor="start" x="556.14" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Corporate Planning</text>
</g>
<!-- orgstructuremanagement -->
<g id="node3" class="node">
<title>orgstructuremanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-828 907.98,-828 907.98,-648 1228.02,-648 1228.02,-828"/>
<text text-anchor="start" x="952.89" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Org Structure Management</text>
</g>
<!-- eventmanagement -->
<g id="node4" class="node">
<title>eventmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="122.98" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Event &#160;Management</text>
</g>
<!-- travelmanagement -->
<g id="node5" class="node">
<title>travelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="553.52" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Travel Management</text>
</g>
<!-- enterprisechangemanagement -->
<g id="node6" class="node">
<title>enterprisechangemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="930.7" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Enterprise Change Management</text>
</g>
<!-- corporategovernancemanagement -->
<g id="node7" class="node">
<title>corporategovernancemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="389.78,-228 48.22,-228 48.22,-48 389.78,-48 389.78,-228"/>
<text text-anchor="start" x="64.27" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Corporate Governance Management</text>
</g>
<!-- strategymanagement2 -->
<g id="node8" class="node">
<title>strategymanagement2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1024.02,-228 703.98,-228 703.98,-48 1024.02,-48 1024.02,-228"/>
<text text-anchor="start" x="770.53" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Strategy Management</text>
</g>
<!-- legal&#45;&gt;eventmanagement -->
<!-- corporateplanning&#45;&gt;orgstructuremanagement -->
<!-- orgstructuremanagement&#45;&gt;travelmanagement -->
<!-- eventmanagement&#45;&gt;corporategovernancemanagement -->
<!-- travelmanagement&#45;&gt;enterprisechangemanagement -->
</g>
</svg>
`;case"viewCrossChannelManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_crosschannelmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CROSS CHANNEL MANAGEMENT</text>
</g>
<!-- returnsmanagement -->
<g id="node1" class="node">
<title>returnsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="116.65" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Returns Management</text>
</g>
<!-- multi&#45;channelordermanagement -->
<g id="node2" class="node">
<title>multi&#45;channelordermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="66.49" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Multi&#45;channel Order Management</text>
</g>
<!-- returnsmanagement&#45;&gt;multi&#45;channelordermanagement -->
</g>
</svg>
`;case"viewCustomerManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1342pt" height="627pt"
 viewBox="0.00 0.00 1342.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_customermanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1304,-589.2 1304,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER MANAGEMENT</text>
</g>
<!-- customeranalytics -->
<g id="node1" class="node">
<title>customeranalytics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="373.02,-528 52.98,-528 52.98,-348 373.02,-348 373.02,-528"/>
<text text-anchor="start" x="131.17" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Analytics</text>
</g>
<!-- customerexperiencemanagement -->
<g id="node2" class="node">
<title>customerexperiencemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="814.49,-528 483.51,-528 483.51,-348 814.49,-348 814.49,-528"/>
<text text-anchor="start" x="499.57" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Experience Management</text>
</g>
<!-- customerinformationmanagement -->
<g id="node3" class="node">
<title>customerinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1255.49,-528 924.51,-528 924.51,-348 1255.49,-348 1255.49,-528"/>
<text text-anchor="start" x="940.57" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Information Management</text>
</g>
<!-- customerrelationshipmanagement -->
<g id="node4" class="node">
<title>customerrelationshipmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="388.25,-228 47.75,-228 47.75,-48 388.25,-48 388.25,-228"/>
<text text-anchor="start" x="63.81" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Relationship Management</text>
</g>
<!-- customersalescyclemanagement -->
<g id="node5" class="node">
<title>customersalescyclemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="834.12,-228 497.88,-228 497.88,-48 834.12,-48 834.12,-228"/>
<text text-anchor="start" x="513.94" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Sales Cycle Management</text>
</g>
<!-- customerservice -->
<g id="node6" class="node">
<title>customerservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1264.02,-228 943.98,-228 943.98,-48 1264.02,-48 1264.02,-228"/>
<text text-anchor="start" x="1028.51" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Service</text>
</g>
<!-- customeranalytics&#45;&gt;customerrelationshipmanagement -->
<!-- customerexperiencemanagement&#45;&gt;customerinformationmanagement -->
<!-- customerinformationmanagement&#45;&gt;customersalescyclemanagement -->
<!-- customersalescyclemanagement&#45;&gt;customerservice -->
</g>
</svg>
`;case"viewDeliveryManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_deliverymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DELIVERY MANAGEMENT</text>
</g>
<!-- lastmiledelivery -->
<g id="node1" class="node">
<title>lastmiledelivery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="125.03" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Last Mile Delivery</text>
</g>
</g>
</svg>
`;case"viewDevicesandSystemsManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_devicesandsystemsmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEVICES AND SYSTEMS MANAGEMENT</text>
</g>
<!-- iotmanagement -->
<g id="node1" class="node">
<title>iotmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="126.08" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IOT Management</text>
</g>
</g>
</svg>
`;case"drilldown":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1686pt" height="1110pt"
 viewBox="0.00 0.00 1686.25 1110.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- supplychainmanagement -->
<g id="node1" class="node">
<title>supplychainmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-1080 3.38,-1080 3.38,-900 323.42,-900 323.42,-1080"/>
<text text-anchor="start" x="48.8" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supply Chain Management</text>
</g>
<!-- partnermanagement -->
<g id="node2" class="node">
<title>partnermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-780 3.38,-780 3.38,-600 323.42,-600 323.42,-780"/>
<text text-anchor="start" x="74.16" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Partner Management</text>
</g>
<!-- salesmanagement -->
<g id="node3" class="node">
<title>salesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-480 3.38,-480 3.38,-300 323.42,-300 323.42,-480"/>
<text text-anchor="start" x="81.54" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Management</text>
</g>
<!-- financeandaccountmanagement -->
<g id="node4" class="node">
<title>financeandaccountmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="326.8,-180 0,-180 0,0 326.8,0 326.8,-180"/>
<text text-anchor="start" x="16.06" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Finance and Account Management</text>
</g>
<!-- manufacturingmanagement -->
<g id="node5" class="node">
<title>manufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-1080 436.38,-1080 436.38,-900 756.42,-900 756.42,-1080"/>
<text text-anchor="start" x="478.11" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Manufacturing Management</text>
</g>
<!-- productsandservicesmanagement -->
<g id="node6" class="node">
<title>productsandservicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-780 436.38,-780 436.38,-600 756.42,-600 756.42,-780"/>
<text text-anchor="start" x="452.78" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Products &amp; Services Management</text>
</g>
<!-- marketingmanagement -->
<g id="node7" class="node">
<title>marketingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-480 436.38,-480 436.38,-300 756.42,-300 756.42,-480"/>
<text text-anchor="start" x="496.6" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Marketing Management</text>
</g>
<!-- assetmanagement -->
<g id="node8" class="node">
<title>assetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-180 436.38,-180 436.38,0 756.42,0 756.42,-180"/>
<text text-anchor="start" x="514.55" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Asset Management</text>
</g>
<!-- communicationsmanagement -->
<g id="node9" class="node">
<title>communicationsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-1080 866.38,-1080 866.38,-900 1186.42,-900 1186.42,-1080"/>
<text text-anchor="start" x="897.56" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Communications Management</text>
</g>
<!-- securitymanagement -->
<g id="node10" class="node">
<title>securitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-780 866.38,-780 866.38,-600 1186.42,-600 1186.42,-780"/>
<text text-anchor="start" x="933.99" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Security Management</text>
</g>
<!-- technologymanagement -->
<g id="node11" class="node">
<title>technologymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-480 866.38,-480 866.38,-300 1186.42,-300 1186.42,-480"/>
<text text-anchor="start" x="919.19" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Technology Management</text>
</g>
<!-- humanresourcemanagement -->
<g id="node12" class="node">
<title>humanresourcemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-180 866.38,-180 866.38,0 1186.42,0 1186.42,-180"/>
<text text-anchor="start" x="894.39" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Human Resource Management</text>
</g>
<!-- corporatemanagementandgovernance -->
<g id="node13" class="node">
<title>corporatemanagementandgovernance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1656.16,-1080 1296.64,-1080 1296.64,-900 1656.16,-900 1656.16,-1080"/>
<text text-anchor="start" x="1312.7" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Corporate Management &amp; Governance</text>
</g>
<!-- supplychainmanagement&#45;&gt;partnermanagement -->
<!-- partnermanagement&#45;&gt;salesmanagement -->
<!-- salesmanagement&#45;&gt;financeandaccountmanagement -->
<!-- manufacturingmanagement&#45;&gt;productsandservicesmanagement -->
<!-- productsandservicesmanagement&#45;&gt;marketingmanagement -->
<!-- marketingmanagement&#45;&gt;assetmanagement -->
<!-- communicationsmanagement&#45;&gt;securitymanagement -->
<!-- securitymanagement&#45;&gt;technologymanagement -->
<!-- technologymanagement&#45;&gt;humanresourcemanagement -->
</g>
</svg>
`;case"viewEmployeeDevelopment":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_employeedevelopment</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMPLOYEE DEVELOPMENT</text>
</g>
<!-- employeerecruiting -->
<g id="node1" class="node">
<title>employeerecruiting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="120.35" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Employee Recruiting</text>
</g>
<!-- employeetraining -->
<g id="node2" class="node">
<title>employeetraining</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="128.79" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Employee Training</text>
</g>
<!-- employeerecruiting&#45;&gt;employeetraining -->
</g>
</svg>
`;case"viewEnterpriseChangeManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_enterprisechangemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ENTERPRISE CHANGE MANAGEMENT</text>
</g>
<!-- programmanagement -->
<g id="node1" class="node">
<title>programmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="113.48" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Program Management</text>
</g>
<!-- projectmanagement -->
<g id="node2" class="node">
<title>projectmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="120.34" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Project management</text>
</g>
<!-- programmanagement&#45;&gt;projectmanagement -->
</g>
</svg>
`;case"viewFinanceandAccountManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1312pt" height="627pt"
 viewBox="0.00 0.00 1312.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_financeandaccountmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1274,-589.2 1274,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FINANCE AND ACCOUNT MANAGEMENT</text>
</g>
<!-- accountspayablemanagement -->
<g id="node1" class="node">
<title>accountspayablemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="73.86" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Accounts Payable Management</text>
</g>
<!-- accountsreceivablemanagement -->
<g id="node2" class="node">
<title>accountsreceivablemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="803.86,-528 478.14,-528 478.14,-348 803.86,-348 803.86,-528"/>
<text text-anchor="start" x="494.2" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Accounts Receivable Management</text>
</g>
<!-- taxmanagement -->
<g id="node3" class="node">
<title>taxmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1234.02,-528 913.98,-528 913.98,-348 1234.02,-348 1234.02,-528"/>
<text text-anchor="start" x="1000.07" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Tax Management</text>
</g>
<!-- equitymanagement -->
<g id="node4" class="node">
<title>equitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="123.51" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Equity Management</text>
</g>
<!-- expensemanagement -->
<g id="node5" class="node">
<title>expensemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="804.02,-228 483.98,-228 483.98,-48 804.02,-48 804.02,-228"/>
<text text-anchor="start" x="548.94" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Expense Management</text>
</g>
<!-- treasuryandcashmanagement -->
<g id="node6" class="node">
<title>treasuryandcashmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1234.02,-228 913.98,-228 913.98,-48 1234.02,-48 1234.02,-228"/>
<text text-anchor="start" x="935.12" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Treasury and Cash Management</text>
</g>
<!-- accountspayablemanagement&#45;&gt;equitymanagement -->
<!-- accountsreceivablemanagement&#45;&gt;taxmanagement -->
<!-- taxmanagement&#45;&gt;expensemanagement -->
<!-- expensemanagement&#45;&gt;treasuryandcashmanagement -->
</g>
</svg>
`;case"viewFleetManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_fleetmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FLEET MANAGEMENT</text>
</g>
<!-- fleetacquisition -->
<g id="node1" class="node">
<title>fleetacquisition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="138.3" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Fleet Acquisition</text>
</g>
<!-- fleetmaintenance -->
<g id="node2" class="node">
<title>fleetmaintenance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="559.84" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Fleet Maintenance</text>
</g>
<!-- fleetsales -->
<g id="node3" class="node">
<title>fleetsales</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="160.48" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Fleet Sales</text>
</g>
<!-- fleetacquisition&#45;&gt;fleetsales -->
</g>
</svg>
`;case"viewHumanResourceManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="627pt"
 viewBox="0.00 0.00 1306.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_humanresourcemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1268,-589.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HUMAN RESOURCE MANAGEMENT</text>
</g>
<!-- employeedevelopment -->
<g id="node1" class="node">
<title>employeedevelopment</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="107.14" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Employee Development</text>
</g>
<!-- benefitsmanagement -->
<g id="node2" class="node">
<title>benefitsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="545.58" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Benefits Management</text>
</g>
<!-- payrollmanagement -->
<g id="node3" class="node">
<title>payrollmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="980.87" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Payroll Management</text>
</g>
<!-- employeeinformationmanagement -->
<g id="node4" class="node">
<title>employeeinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="381.55,-228 48.45,-228 48.45,-48 381.55,-48 381.55,-228"/>
<text text-anchor="start" x="64.5" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Employee Information Management</text>
</g>
<!-- hiringmanagement -->
<g id="node5" class="node">
<title>hiringmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text text-anchor="start" x="985.1" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Hiring Management</text>
</g>
<!-- employeedevelopment&#45;&gt;employeeinformationmanagement -->
<!-- benefitsmanagement&#45;&gt;payrollmanagement -->
<!-- payrollmanagement&#45;&gt;hiringmanagement -->
</g>
</svg>
`;case"viewIntellectualPropertyManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_intellectualpropertymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INTELLECTUAL PROPERTY MANAGEMENT</text>
</g>
<!-- intellectualpropertymanagement -->
<g id="node1" class="node">
<title>intellectualpropertymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="65.95" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Intellectual Property Management</text>
</g>
<!-- intellectualpropertydefinition -->
<g id="node2" class="node">
<title>intellectualpropertydefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="81.8" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Intellectual Property Definition</text>
</g>
<!-- intellectualpropertymanagement&#45;&gt;intellectualpropertydefinition -->
</g>
</svg>
`;case"viewInventoryManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_inventorymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INVENTORY MANAGEMENT</text>
</g>
<!-- demandandforecasting -->
<g id="node1" class="node">
<title>demandandforecasting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="101.33" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Demand and Forecasting</text>
</g>
<!-- inventoryplanning -->
<g id="node2" class="node">
<title>inventoryplanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="559.31" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Inventory Planning</text>
</g>
<!-- consignmentinventorymanagement -->
<g id="node3" class="node">
<title>consignmentinventorymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="391.84,-228 48.16,-228 48.16,-48 391.84,-48 391.84,-228"/>
<text text-anchor="start" x="64.22" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment Inventory Management</text>
</g>
<!-- demandandforecasting&#45;&gt;consignmentinventorymanagement -->
</g>
</svg>
`;case"viewInvestmentManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="898pt" height="627pt"
 viewBox="0.00 0.00 898.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_investmentmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 860,-589.2 860,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INVESTMENT MANAGEMENT</text>
</g>
<!-- investmentdefinition -->
<g id="node1" class="node">
<title>investmentdefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="379.02,-528 58.98,-528 58.98,-348 379.02,-348 379.02,-528"/>
<text text-anchor="start" x="130.29" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Investment Definition</text>
</g>
<!-- investmentriskmanagement -->
<g id="node2" class="node">
<title>investmentriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="820.02,-528 499.98,-528 499.98,-348 820.02,-348 820.02,-528"/>
<text text-anchor="start" x="534.33" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Investment Risk Management</text>
</g>
<!-- investmentinformationmanagement -->
<g id="node3" class="node">
<title>investmentinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="389.77,-228 48.23,-228 48.23,-48 389.77,-48 389.77,-228"/>
<text text-anchor="start" x="64.28" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Investment Information Management</text>
</g>
<!-- investmentvaluation -->
<g id="node4" class="node">
<title>investmentvaluation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="820.02,-228 499.98,-228 499.98,-48 820.02,-48 820.02,-228"/>
<text text-anchor="start" x="571.28" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Investment Valuation</text>
</g>
<!-- investmentdefinition&#45;&gt;investmentinformationmanagement -->
<!-- investmentriskmanagement&#45;&gt;investmentvaluation -->
</g>
</svg>
`;case"viewJobManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_jobmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">JOB MANAGEMENT</text>
</g>
<!-- schedulingmanagement -->
<g id="node1" class="node">
<title>schedulingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="94.9" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Scheduling Management</text>
</g>
</g>
</svg>
`;case"viewLegal":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_legal</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LEGAL</text>
</g>
<!-- policymanagement -->
<g id="node1" class="node">
<title>policymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="124.57" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Policy Management</text>
</g>
<!-- contractmanagement -->
<g id="node2" class="node">
<title>contractmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="114.01" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Contract Management</text>
</g>
<!-- policymanagement&#45;&gt;contractmanagement -->
</g>
</svg>
`;case"viewManufacturingManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1314pt" height="627pt"
 viewBox="0.00 0.00 1314.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_manufacturingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1276,-589.2 1276,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MANUFACTURING MANAGEMENT</text>
</g>
<!-- jobmanagement -->
<g id="node1" class="node">
<title>jobmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="134.59" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Job Management</text>
</g>
<!-- manufacturingmanagement -->
<g id="node2" class="node">
<title>manufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="519.71" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Manufacturing Management</text>
</g>
<!-- qualityassurance -->
<g id="node3" class="node">
<title>qualityassurance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="990.91" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Quality Assurance</text>
</g>
<!-- rawmaterialmanagement -->
<g id="node4" class="node">
<title>rawmaterialmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="94.48" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Raw Material Management</text>
</g>
<!-- heavymanufacturingmanagement -->
<g id="node5" class="node">
<title>heavymanufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="805.91,-228 478.09,-228 478.09,-48 805.91,-48 805.91,-228"/>
<text text-anchor="start" x="494.14" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Heavy Manufacturing Management</text>
</g>
<!-- lightmanufacturingmanagement -->
<g id="node6" class="node">
<title>lightmanufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1236.02,-228 915.98,-228 915.98,-48 1236.02,-48 1236.02,-228"/>
<text text-anchor="start" x="934.47" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Light Manufacturing Management</text>
</g>
<!-- jobmanagement&#45;&gt;rawmaterialmanagement -->
<!-- manufacturingmanagement&#45;&gt;qualityassurance -->
<!-- qualityassurance&#45;&gt;heavymanufacturingmanagement -->
<!-- heavymanufacturingmanagement&#45;&gt;lightmanufacturingmanagement -->
</g>
</svg>
`;case"viewMarketingManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_marketingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MARKETING MANAGEMENT</text>
</g>
<!-- brandmanagement -->
<g id="node1" class="node">
<title>brandmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="124.56" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Brand Management</text>
</g>
<!-- campaignmanagement -->
<g id="node2" class="node">
<title>campaignmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="106.61" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Campaign Management</text>
</g>
<!-- brandmanagement&#45;&gt;campaignmanagement -->
</g>
</svg>
`;case"viewPartnerManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_partnermanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PARTNER MANAGEMENT</text>
</g>
<!-- suppliermanagement -->
<g id="node1" class="node">
<title>suppliermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="115.05" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Management</text>
</g>
<!-- customermanagement -->
<g id="node2" class="node">
<title>customermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="108.73" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Management</text>
</g>
<!-- suppliermanagement&#45;&gt;customermanagement -->
</g>
</svg>
`;case"viewPhysicalSecurityManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_physicalsecuritymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PHYSICAL SECURITY MANAGEMENT</text>
</g>
<!-- lossprevention -->
<g id="node1" class="node">
<title>lossprevention</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="131.88" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Loss Prevention</text>
</g>
</g>
</svg>
`;case"viewProductInformationManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_productinformationmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PRODUCT INFORMATION MANAGEMENT</text>
</g>
<!-- crossreferencemanagement -->
<g id="node1" class="node">
<title>crossreferencemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="78.63" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Cross Reference Management</text>
</g>
<!-- productattributemanagement -->
<g id="node2" class="node">
<title>productattributemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="509.15" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Product Attribute Management</text>
</g>
<!-- digitalassetmanagement -->
<g id="node3" class="node">
<title>digitalassetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="97.11" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Digital Asset Management</text>
</g>
<!-- producttaxonomymanagement -->
<g id="node4" class="node">
<title>producttaxonomymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="500.18" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Product Taxonomy Management</text>
</g>
<!-- crossreferencemanagement&#45;&gt;digitalassetmanagement -->
<!-- productattributemanagement&#45;&gt;producttaxonomymanagement -->
</g>
</svg>
`;case"viewProductLineManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_productlinemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PRODUCT LINE MANAGEMENT</text>
</g>
<!-- productdevelopment -->
<g id="node1" class="node">
<title>productdevelopment</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="108.65" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Product Development</text>
</g>
</g>
</svg>
`;case"viewProductsAndServicesManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="627pt"
 viewBox="0.00 0.00 1306.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_productsandservicesmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1268,-589.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PRODUCTS &amp; SERVICES MANAGEMENT</text>
</g>
<!-- servicesmanagement -->
<g id="node1" class="node">
<title>servicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="113.48" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Services Management</text>
</g>
<!-- printservicesmanagement -->
<g id="node2" class="node">
<title>printservicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="521.31" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Print Services Management</text>
</g>
<!-- catalogmanagement -->
<g id="node3" class="node">
<title>catalogmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="977.17" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Catalog Management</text>
</g>
<!-- productlinemanagement -->
<g id="node4" class="node">
<title>productlinemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="96.57" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Product Line Management</text>
</g>
<!-- productinformationmanagement -->
<g id="node5" class="node">
<title>productinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text text-anchor="start" x="927.01" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Product Information Management</text>
</g>
<!-- servicesmanagement&#45;&gt;productlinemanagement -->
<!-- printservicesmanagement&#45;&gt;catalogmanagement -->
<!-- catalogmanagement&#45;&gt;productinformationmanagement -->
</g>
</svg>
`;case"viewPropertyManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_propertymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PROPERTY MANAGEMENT</text>
</g>
<!-- constructionmanagement -->
<g id="node1" class="node">
<title>constructionmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="96.58" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Construction Management</text>
</g>
<!-- leasemanagement -->
<g id="node2" class="node">
<title>leasemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="554.03" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Lease Management</text>
</g>
<!-- occupancymanagement -->
<g id="node3" class="node">
<title>occupancymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="102.39" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Occupancy Management</text>
</g>
<!-- facilitymaintenance -->
<g id="node4" class="node">
<title>facilitymaintenance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="551.41" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Facility Maintenance</text>
</g>
<!-- constructionmanagement&#45;&gt;occupancymanagement -->
<!-- leasemanagement&#45;&gt;facilitymaintenance -->
</g>
</svg>
`;case"viewSalesChannelManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_saleschannelmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SALES CHANNEL MANAGEMENT</text>
</g>
<!-- merchandising -->
<g id="node1" class="node">
<title>merchandising</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="146.22" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Merchandising</text>
</g>
<!-- promosandincentives -->
<g id="node2" class="node">
<title>promosandincentives</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="111.37" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Promos and Incentives</text>
</g>
<!-- merchandising&#45;&gt;promosandincentives -->
</g>
</svg>
`;case"viewSalesInformationManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_salesinformationmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SALES INFORMATION MANAGEMENT</text>
</g>
<!-- bookofbusinessmanagement -->
<g id="node1" class="node">
<title>bookofbusinessmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="74.4" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Book Of Business Management</text>
</g>
<!-- salesterritoriesmanagement -->
<g id="node2" class="node">
<title>salesterritoriesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="80.75" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Territories Management</text>
</g>
<!-- bookofbusinessmanagement&#45;&gt;salesterritoriesmanagement -->
</g>
</svg>
`;case"viewSalesManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="627pt"
 viewBox="0.00 0.00 1306.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_salesmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1268,-589.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SALES MANAGEMENT</text>
</g>
<!-- saleschannelmanagement -->
<g id="node1" class="node">
<title>saleschannelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="88.12" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Channel Management</text>
</g>
<!-- salesinformationmanagement -->
<g id="node2" class="node">
<title>salesinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="505.98" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Information Management</text>
</g>
<!-- crosschannelmanagement -->
<g id="node3" class="node">
<title>crosschannelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="947.07" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Cross Channel Management</text>
</g>
<!-- salesordermanagement -->
<g id="node4" class="node">
<title>salesordermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="99.22" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Order Management</text>
</g>
<!-- pricingmanagement -->
<g id="node5" class="node">
<title>pricingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text text-anchor="start" x="980.87" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Pricing Management</text>
</g>
<!-- saleschannelmanagement&#45;&gt;salesordermanagement -->
<!-- salesinformationmanagement&#45;&gt;crosschannelmanagement -->
<!-- crosschannelmanagement&#45;&gt;pricingmanagement -->
</g>
</svg>
`;case"viewSalesOrderManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_salesordermanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SALES ORDER MANAGEMENT</text>
</g>
<!-- billingandinvoicing -->
<g id="node1" class="node">
<title>billingandinvoicing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="124.03" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Billing and Invoicing</text>
</g>
<!-- customerquotemanagement -->
<g id="node2" class="node">
<title>customerquotemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="510.21" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Quote Management</text>
</g>
<!-- fulfillmentmanagement -->
<g id="node3" class="node">
<title>fulfillmentmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="106.62" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Fulfillment Management</text>
</g>
<!-- billingandinvoicing&#45;&gt;fulfillmentmanagement -->
</g>
</svg>
`;case"viewSecurityManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_securitymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECURITY MANAGEMENT</text>
</g>
<!-- itsecurityandriskmanagement -->
<g id="node1" class="node">
<title>itsecurityandriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="64.91" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IT Security and Risk Management</text>
</g>
<!-- physicalsecuritymanagement -->
<g id="node2" class="node">
<title>physicalsecuritymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="77.58" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Physical Security Management</text>
</g>
<!-- itsecurityandriskmanagement&#45;&gt;physicalsecuritymanagement -->
</g>
</svg>
`;case"viewSourcingManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="627pt"
 viewBox="0.00 0.00 446.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_sourcingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 408,-589.2 408,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SOURCING MANAGEMENT</text>
</g>
<!-- supplierquoting -->
<g id="node1" class="node">
<title>supplierquoting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="137.23" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Quoting</text>
</g>
<!-- cogsmanagement -->
<g id="node2" class="node">
<title>cogsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="121.93" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">COGS Management</text>
</g>
<!-- supplierquoting&#45;&gt;cogsmanagement -->
</g>
</svg>
`;case"viewStrategyManagement2":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_strategymanagement2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STRATEGY MANAGEMENT</text>
</g>
<!-- businessentitymanagement -->
<g id="node1" class="node">
<title>businessentitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="84.96" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Business Entity Management</text>
</g>
<!-- strategymanagement3 -->
<g id="node2" class="node">
<title>strategymanagement3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="544.53" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Strategy Management</text>
</g>
<!-- investmentmanagement -->
<g id="node3" class="node">
<title>investmentmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="103.44" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Investment Management</text>
</g>
<!-- intellectualpropertymanagement -->
<g id="node4" class="node">
<title>intellectualpropertymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="495.95" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Intellectual Property Management</text>
</g>
<!-- businessentitymanagement&#45;&gt;investmentmanagement -->
<!-- strategymanagement3&#45;&gt;intellectualpropertymanagement -->
</g>
</svg>
`;case"viewStrategyManagement3":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="927pt"
 viewBox="0.00 0.00 1306.10 927.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 912.25)">
<g id="clust1" class="cluster">
<title>cluster_strategymanagement3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 1268,-889.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STRATEGY MANAGEMENT</text>
</g>
<!-- objectivemanagement -->
<g id="node1" class="node">
<title>objectivemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text text-anchor="start" x="110.31" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Objective Management</text>
</g>
<!-- goaldefinition -->
<g id="node2" class="node">
<title>goaldefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text text-anchor="start" x="575.69" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Goal Definition</text>
</g>
<!-- actionitemdefinition -->
<g id="node3" class="node">
<title>actionitemdefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-828 907.98,-828 907.98,-648 1228.02,-648 1228.02,-828"/>
<text text-anchor="start" x="978.24" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Action Item Definition</text>
</g>
<!-- strategyinformationmanagement -->
<g id="node4" class="node">
<title>strategyinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="64.9" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Strategy information management</text>
</g>
<!-- strategydefinition -->
<g id="node5" class="node">
<title>strategydefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="560.38" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Strategy Definition</text>
</g>
<!-- visiondefinition -->
<g id="node6" class="node">
<title>visiondefinition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="999.88" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Vision Definition</text>
</g>
<!-- strategyriskmanagement -->
<g id="node7" class="node">
<title>strategyriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="93.42" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Strategy Risk Management</text>
</g>
<!-- pricingstrategymanagement -->
<g id="node8" class="node">
<title>pricingstrategymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1013.02,-228 692.98,-228 692.98,-48 1013.02,-48 1013.02,-228"/>
<text text-anchor="start" x="727.85" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Pricing Strategy Management</text>
</g>
<!-- objectivemanagement&#45;&gt;strategyinformationmanagement -->
<!-- goaldefinition&#45;&gt;actionitemdefinition -->
<!-- actionitemdefinition&#45;&gt;strategydefinition -->
<!-- strategyinformationmanagement&#45;&gt;strategyriskmanagement -->
<!-- strategydefinition&#45;&gt;visiondefinition -->
</g>
</svg>
`;case"viewSupplierManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="884pt" height="627pt"
 viewBox="0.00 0.00 884.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_suppliermanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 846,-589.2 846,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SUPPLIER MANAGEMENT</text>
</g>
<!-- supplierinformationmanagement -->
<g id="node1" class="node">
<title>supplierinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.02,-528 51.98,-528 51.98,-348 372.02,-348 372.02,-528"/>
<text text-anchor="start" x="68.89" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Information Management</text>
</g>
<!-- supplierqualitymanagement -->
<g id="node2" class="node">
<title>supplierqualitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="806.02,-528 485.98,-528 485.98,-348 806.02,-348 806.02,-528"/>
<text text-anchor="start" x="520.85" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Quality Management</text>
</g>
<!-- supplierrelationshipmanagement -->
<g id="node3" class="node">
<title>supplierrelationshipmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="375.92,-228 48.08,-228 48.08,-48 375.92,-48 375.92,-228"/>
<text text-anchor="start" x="64.13" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Relationship Management</text>
</g>
<!-- supplierriskmanagement -->
<g id="node4" class="node">
<title>supplierriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="806.02,-228 485.98,-228 485.98,-48 806.02,-48 806.02,-228"/>
<text text-anchor="start" x="531.94" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supplier Risk Management</text>
</g>
<!-- supplierinformationmanagement&#45;&gt;supplierrelationshipmanagement -->
<!-- supplierqualitymanagement&#45;&gt;supplierriskmanagement -->
</g>
</svg>
`;case"viewSupplyChainManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="927pt"
 viewBox="0.00 0.00 1306.10 927.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 912.25)">
<g id="clust1" class="cluster">
<title>cluster_supplychainmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 1268,-889.2 1268,-8 8,-8"/>
<text text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SUPPLY CHAIN MANAGEMENT</text>
</g>
<!-- inventorymanagement -->
<g id="node1" class="node">
<title>inventorymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text text-anchor="start" x="110.83" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Inventory Management</text>
</g>
<!-- warehousingmanagement -->
<g id="node2" class="node">
<title>warehousingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text text-anchor="start" x="523.94" y="-732.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Warehousing Management</text>
</g>
<!-- transportationand3rdpartylogisticsmanagement -->
<g id="node3" class="node">
<title>transportationand3rdpartylogisticsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-828 907.98,-828 907.98,-648 1228.02,-648 1228.02,-828"/>
<text text-anchor="start" x="947.07" y="-743.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Transportation and 3rd Party</text>
<text text-anchor="start" x="972.95" y="-720.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Logistics Management</text>
</g>
<!-- sourcingmanagement -->
<g id="node4" class="node">
<title>sourcingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="112.42" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sourcing Management</text>
</g>
<!-- supplychainplanning -->
<g id="node5" class="node">
<title>supplychainplanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="541.88" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supply Chain Planning</text>
</g>
<!-- procurement -->
<g id="node6" class="node">
<title>procurement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text text-anchor="start" x="1013.62" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Procurement</text>
</g>
<!-- supplychaingovernanceandriskmanagement -->
<g id="node7" class="node">
<title>supplychaingovernanceandriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="381.56,-228 48.44,-228 48.44,-48 381.56,-48 381.56,-228"/>
<text text-anchor="start" x="64.5" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Supply Chain Governance and Risk</text>
<text text-anchor="start" x="159.55" y="-120.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Management</text>
</g>
<!-- inventorymanagement&#45;&gt;sourcingmanagement -->
<!-- warehousingmanagement&#45;&gt;transportationand3rdpartylogisticsmanagement -->
<!-- transportationand3rdpartylogisticsmanagement&#45;&gt;supplychainplanning -->
<!-- sourcingmanagement&#45;&gt;supplychaingovernanceandriskmanagement -->
<!-- supplychainplanning&#45;&gt;procurement -->
</g>
</svg>
`;case"viewTechnologyManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1317pt" height="627pt"
 viewBox="0.00 0.00 1317.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_technologymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1279,-589.2 1279,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TECHNOLOGY MANAGEMENT</text>
</g>
<!-- devicesandsystemsmanagement -->
<g id="node1" class="node">
<title>devicesandsystemsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.49,-528 47.51,-528 47.51,-348 378.49,-348 378.49,-528"/>
<text text-anchor="start" x="63.57" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Devices and Systems Management</text>
</g>
<!-- itarchitecture -->
<g id="node2" class="node">
<title>itarchitecture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="809.02,-528 488.98,-528 488.98,-348 809.02,-348 809.02,-528"/>
<text text-anchor="start" x="587.23" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IT Architecture</text>
</g>
<!-- itsupportmanagement -->
<g id="node3" class="node">
<title>itsupportmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1239.02,-528 918.98,-528 918.98,-348 1239.02,-348 1239.02,-528"/>
<text text-anchor="start" x="976.55" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IT Support Management</text>
</g>
<!-- itportfoliomanagement -->
<g id="node4" class="node">
<title>itportfoliomanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="373.02,-228 52.98,-228 52.98,-48 373.02,-48 373.02,-228"/>
<text text-anchor="start" x="108.98" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">IT Portfolio Management</text>
</g>
<!-- softwaredeliverymanagement -->
<g id="node5" class="node">
<title>softwaredeliverymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1239.02,-228 918.98,-228 918.98,-48 1239.02,-48 1239.02,-228"/>
<text text-anchor="start" x="946.47" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Software Delivery Management</text>
</g>
<!-- devicesandsystemsmanagement&#45;&gt;itportfoliomanagement -->
<!-- itarchitecture&#45;&gt;itsupportmanagement -->
<!-- itsupportmanagement&#45;&gt;softwaredeliverymanagement -->
</g>
</svg>
`;case"viewTransportation3rdPartLogisticsManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="627pt"
 viewBox="0.00 0.00 876.10 627.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_transportationand3rdpartylogisticsmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 838,-589.2 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TRANSPORTATION AND 3RD PARTY LOGISTICS MANAGEMENT</text>
</g>
<!-- third&#45;partycarriermanagement -->
<g id="node1" class="node">
<title>third&#45;partycarriermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text text-anchor="start" x="71.26" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Third&#45;Party Carrier Management</text>
</g>
<!-- truckroutemanagement -->
<g id="node2" class="node">
<title>truckroutemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text text-anchor="start" x="528.17" y="-432.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Truck Route Management</text>
</g>
<!-- transportationregulatorycompliance -->
<g id="node3" class="node">
<title>transportationregulatorycompliance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="98.17" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Transportation Regulatory</text>
<text text-anchor="start" x="157.84" y="-120.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Compliance</text>
</g>
<!-- deliverymanagement -->
<g id="node4" class="node">
<title>deliverymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="545.6" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Delivery Management</text>
</g>
<!-- third&#45;partycarriermanagement&#45;&gt;transportationregulatorycompliance -->
<!-- truckroutemanagement&#45;&gt;deliverymanagement -->
</g>
</svg>
`;case"viewWarehousingManagement":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_warehousingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WAREHOUSING MANAGEMENT</text>
</g>
<!-- slotmanagement -->
<g id="node1" class="node">
<title>slotmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="125.54" y="-124.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Slot Management</text>
</g>
</g>
</svg>
`;case"level1capabilities":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1686pt" height="1110pt"
 viewBox="0.00 0.00 1686.25 1110.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- supplychainmanagement -->
<g id="node1" class="node">
<title>supplychainmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-1080 3.38,-1080 3.38,-900 323.42,-900 323.42,-1080"/>
<text text-anchor="start" x="48.8" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Supply Chain Management</text>
</g>
<!-- partnermanagement -->
<g id="node2" class="node">
<title>partnermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-780 3.38,-780 3.38,-600 323.42,-600 323.42,-780"/>
<text text-anchor="start" x="74.16" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Partner Management</text>
</g>
<!-- salesmanagement -->
<g id="node3" class="node">
<title>salesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="323.42,-480 3.38,-480 3.38,-300 323.42,-300 323.42,-480"/>
<text text-anchor="start" x="81.54" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Sales Management</text>
</g>
<!-- financeandaccountmanagement -->
<g id="node4" class="node">
<title>financeandaccountmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="326.8,-180 0,-180 0,0 326.8,0 326.8,-180"/>
<text text-anchor="start" x="16.06" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Finance and Account Management</text>
</g>
<!-- manufacturingmanagement -->
<g id="node5" class="node">
<title>manufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-1080 436.38,-1080 436.38,-900 756.42,-900 756.42,-1080"/>
<text text-anchor="start" x="478.11" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Manufacturing Management</text>
</g>
<!-- productsandservicesmanagement -->
<g id="node6" class="node">
<title>productsandservicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-780 436.38,-780 436.38,-600 756.42,-600 756.42,-780"/>
<text text-anchor="start" x="452.78" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Products &amp; Services Management</text>
</g>
<!-- marketingmanagement -->
<g id="node7" class="node">
<title>marketingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-480 436.38,-480 436.38,-300 756.42,-300 756.42,-480"/>
<text text-anchor="start" x="496.6" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Marketing Management</text>
</g>
<!-- assetmanagement -->
<g id="node8" class="node">
<title>assetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="756.42,-180 436.38,-180 436.38,0 756.42,0 756.42,-180"/>
<text text-anchor="start" x="514.55" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Asset Management</text>
</g>
<!-- communicationsmanagement -->
<g id="node9" class="node">
<title>communicationsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-1080 866.38,-1080 866.38,-900 1186.42,-900 1186.42,-1080"/>
<text text-anchor="start" x="897.56" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Communications Management</text>
</g>
<!-- securitymanagement -->
<g id="node10" class="node">
<title>securitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-780 866.38,-780 866.38,-600 1186.42,-600 1186.42,-780"/>
<text text-anchor="start" x="933.99" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Security Management</text>
</g>
<!-- technologymanagement -->
<g id="node11" class="node">
<title>technologymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-480 866.38,-480 866.38,-300 1186.42,-300 1186.42,-480"/>
<text text-anchor="start" x="919.19" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Technology Management</text>
</g>
<!-- humanresourcemanagement -->
<g id="node12" class="node">
<title>humanresourcemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1186.42,-180 866.38,-180 866.38,0 1186.42,0 1186.42,-180"/>
<text text-anchor="start" x="894.39" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Human Resource Management</text>
</g>
<!-- corporatemanagementandgovernance -->
<g id="node13" class="node">
<title>corporatemanagementandgovernance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1656.16,-1080 1296.64,-1080 1296.64,-900 1656.16,-900 1656.16,-1080"/>
<text text-anchor="start" x="1312.7" y="-984.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Corporate Management &amp; Governance</text>
</g>
<!-- supplychainmanagement&#45;&gt;partnermanagement -->
<!-- partnermanagement&#45;&gt;salesmanagement -->
<!-- salesmanagement&#45;&gt;financeandaccountmanagement -->
<!-- manufacturingmanagement&#45;&gt;productsandservicesmanagement -->
<!-- productsandservicesmanagement&#45;&gt;marketingmanagement -->
<!-- marketingmanagement&#45;&gt;assetmanagement -->
<!-- communicationsmanagement&#45;&gt;securitymanagement -->
<!-- securitymanagement&#45;&gt;technologymanagement -->
<!-- technologymanagement&#45;&gt;humanresourcemanagement -->
</g>
</svg>
`;case"level1and2capabilities":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="8487pt" height="3027pt"
 viewBox="0.00 0.00 8487.10 3027.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3012.25)">
<g id="clust1" class="cluster">
<title>cluster_supplychainmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-2108 8,-2989.2 1524,-2989.2 1524,-2108 8,-2108"/>
<text text-anchor="start" x="16" y="-2976.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SUPPLY CHAIN MANAGEMENT</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_partnermanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2133,-2408 2133,-2989.2 2579,-2989.2 2579,-2408 2133,-2408"/>
<text text-anchor="start" x="2141" y="-2976.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PARTNER MANAGEMENT</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_salesmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1532,-1808 1532,-2389.2 3184,-2389.2 3184,-1808 1532,-1808"/>
<text text-anchor="start" x="1540" y="-2376.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SALES MANAGEMENT</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_financeandaccountmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1724,-1208 1724,-1789.2 3354,-1789.2 3354,-1208 1724,-1208"/>
<text text-anchor="start" x="1732" y="-1776.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FINANCE AND ACCOUNT MANAGEMENT</text>
</g>
<g id="clust11" class="cluster">
<title>cluster_manufacturingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2355,-608 2355,-1189.2 4108,-1189.2 4108,-608 2355,-608"/>
<text text-anchor="start" x="2363" y="-1176.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MANUFACTURING MANAGEMENT</text>
</g>
<g id="clust14" class="cluster">
<title>cluster_productsandservicesmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3101,-8 3101,-589.2 4515,-589.2 4515,-8 3101,-8"/>
<text text-anchor="start" x="3109" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PRODUCTS &amp; SERVICES MANAGEMENT</text>
</g>
<g id="clust17" class="cluster">
<title>cluster_marketingmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3773,-2408 3773,-2989.2 4227,-2989.2 4227,-2408 3773,-2408"/>
<text text-anchor="start" x="3781" y="-2976.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MARKETING MANAGEMENT</text>
</g>
<g id="clust18" class="cluster">
<title>cluster_assetmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3214,-1808 3214,-2389.2 4200,-2389.2 4200,-1808 3214,-1808"/>
<text text-anchor="start" x="3222" y="-2376.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ASSET MANAGEMENT</text>
</g>
<g id="clust20" class="cluster">
<title>cluster_communicationsmanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4208,-1508 4208,-2089.2 5444,-2089.2 5444,-1508 4208,-1508"/>
<text text-anchor="start" x="4216" y="-2076.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">COMMUNICATIONS MANAGEMENT</text>
</g>
<g id="clust22" class="cluster">
<title>cluster_securitymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="6001,-2408 6001,-2989.2 6595,-2989.2 6595,-2408 6001,-2408"/>
<text text-anchor="start" x="6009" y="-2976.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECURITY MANAGEMENT</text>
</g>
<g id="clust23" class="cluster">
<title>cluster_technologymanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="5452,-1808 5452,-2389.2 6986,-2389.2 6986,-1808 5452,-1808"/>
<text text-anchor="start" x="5460" y="-2376.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TECHNOLOGY MANAGEMENT</text>
</g>
<g id="clust26" class="cluster">
<title>cluster_humanresourcemanagement</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="5810,-1208 5810,-1789.2 7152,-1789.2 7152,-1208 5810,-1208"/>
<text text-anchor="start" x="5818" y="-1776.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HUMAN RESOURCE MANAGEMENT</text>
</g>
<g id="clust29" class="cluster">
<title>cluster_corporatemanagementandgovernance</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="7015,-2108 7015,-2989.2 8449,-2989.2 8449,-2108 7015,-2108"/>
<text text-anchor="start" x="7023" y="-2976.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CORPORATE MANAGEMENT &amp; GOVERNANCE</text>
</g>
<!-- inventorymanagement -->
<g id="node1" class="node">
<title>inventorymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="407.7,-2928 48.3,-2928 48.3,-2748 407.7,-2748 407.7,-2928"/>
<text text-anchor="start" x="64.35" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Inventory Management</text>
</g>
<!-- warehousingmanagement -->
<g id="node2" class="node">
<title>warehousingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="934.17,-2928 517.83,-2928 517.83,-2748 934.17,-2748 934.17,-2928"/>
<text text-anchor="start" x="533.89" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Warehousing Management</text>
</g>
<!-- transportationand3rdpartylogisticsmanagement -->
<g id="node3" class="node">
<title>transportationand3rdpartylogisticsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1483.72,-2928 1044.28,-2928 1044.28,-2748 1483.72,-2748 1483.72,-2928"/>
<text text-anchor="start" x="1060.34" y="-2847.6" font-family="Arial" font-size="32.00" fill="#eff6ff">Transportation and 3rd Party</text>
<text text-anchor="start" x="1103.91" y="-2809.2" font-family="Arial" font-size="32.00" fill="#eff6ff">Logistics Management</text>
</g>
<!-- sourcingmanagement -->
<g id="node4" class="node">
<title>sourcingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="450.04,-2628 95.96,-2628 95.96,-2448 450.04,-2448 450.04,-2628"/>
<text text-anchor="start" x="112.02" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Sourcing Management</text>
</g>
<!-- supplychainplanning -->
<g id="node5" class="node">
<title>supplychainplanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1053.95,-2628 698.05,-2628 698.05,-2448 1053.95,-2448 1053.95,-2628"/>
<text text-anchor="start" x="714.11" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Supply Chain Planning</text>
</g>
<!-- procurement -->
<g id="node6" class="node">
<title>procurement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1484.02,-2628 1163.98,-2628 1163.98,-2448 1484.02,-2448 1484.02,-2628"/>
<text text-anchor="start" x="1232.41" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Procurement</text>
</g>
<!-- supplychaingovernanceandriskmanagement -->
<g id="node7" class="node">
<title>supplychaingovernanceandriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="587.53,-2328 48.47,-2328 48.47,-2148 587.53,-2148 587.53,-2328"/>
<text text-anchor="start" x="64.52" y="-2247.6" font-family="Arial" font-size="32.00" fill="#eff6ff">Supply Chain Governance and Risk</text>
<text text-anchor="start" x="224.61" y="-2209.2" font-family="Arial" font-size="32.00" fill="#eff6ff">Management</text>
</g>
<!-- suppliermanagement -->
<g id="node8" class="node">
<title>suppliermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2528.6,-2928 2183.4,-2928 2183.4,-2748 2528.6,-2748 2528.6,-2928"/>
<text text-anchor="start" x="2199.46" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Supplier Management</text>
</g>
<!-- customermanagement -->
<g id="node9" class="node">
<title>customermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2539.24,-2628 2172.76,-2628 2172.76,-2448 2539.24,-2448 2539.24,-2628"/>
<text text-anchor="start" x="2188.81" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Customer Management</text>
</g>
<!-- saleschannelmanagement -->
<g id="node10" class="node">
<title>saleschannelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2007.96,-2328 1572.04,-2328 1572.04,-2148 2007.96,-2148 2007.96,-2328"/>
<text text-anchor="start" x="1588.09" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Sales Channel Management</text>
</g>
<!-- salesinformationmanagement -->
<g id="node11" class="node">
<title>salesinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2594.4,-2328 2117.6,-2328 2117.6,-2148 2594.4,-2148 2594.4,-2328"/>
<text text-anchor="start" x="2133.66" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Sales Information Management</text>
</g>
<!-- crosschannelmanagement -->
<g id="node12" class="node">
<title>crosschannelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3143.72,-2328 2704.28,-2328 2704.28,-2148 3143.72,-2148 3143.72,-2328"/>
<text text-anchor="start" x="2720.34" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Cross Channel Management</text>
</g>
<!-- salesordermanagement -->
<g id="node13" class="node">
<title>salesordermanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1989.26,-2028 1590.74,-2028 1590.74,-1848 1989.26,-1848 1989.26,-2028"/>
<text text-anchor="start" x="1606.8" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Sales Order Management</text>
</g>
<!-- pricingmanagement -->
<g id="node14" class="node">
<title>pricingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2783.8,-2028 2458.2,-2028 2458.2,-1848 2783.8,-1848 2783.8,-2028"/>
<text text-anchor="start" x="2474.26" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Pricing Management</text>
</g>
<!-- accountspayablemanagement -->
<g id="node15" class="node">
<title>accountspayablemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2247.97,-1728 1764.03,-1728 1764.03,-1548 2247.97,-1548 2247.97,-1728"/>
<text text-anchor="start" x="1780.09" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Accounts Payable Management</text>
</g>
<!-- accountsreceivablemanagement -->
<g id="node16" class="node">
<title>accountsreceivablemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2884.31,-1728 2357.69,-1728 2357.69,-1548 2884.31,-1548 2884.31,-1728"/>
<text text-anchor="start" x="2373.75" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Accounts Receivable Management</text>
</g>
<!-- taxmanagement -->
<g id="node17" class="node">
<title>taxmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3314.02,-1728 2993.98,-1728 2993.98,-1548 3314.02,-1548 3314.02,-1728"/>
<text text-anchor="start" x="3029.49" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Tax Management</text>
</g>
<!-- equitymanagement -->
<g id="node18" class="node">
<title>equitymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2166.02,-1428 1845.98,-1428 1845.98,-1248 2166.02,-1248 2166.02,-1428"/>
<text text-anchor="start" x="1863.7" y="-1328.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Equity Management</text>
</g>
<!-- expensemanagement -->
<g id="node19" class="node">
<title>expensemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2704.16,-1428 2351.84,-1428 2351.84,-1248 2704.16,-1248 2704.16,-1428"/>
<text text-anchor="start" x="2367.9" y="-1328.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Expense Management</text>
</g>
<!-- treasuryandcashmanagement -->
<g id="node20" class="node">
<title>treasuryandcashmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3313.95,-1428 2814.05,-1428 2814.05,-1248 3313.95,-1248 3313.95,-1428"/>
<text text-anchor="start" x="2830.1" y="-1328.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Treasury and Cash Management</text>
</g>
<!-- jobmanagement -->
<g id="node21" class="node">
<title>jobmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2739.02,-1128 2418.98,-1128 2418.98,-948 2739.02,-948 2739.02,-1128"/>
<text text-anchor="start" x="2455.37" y="-1028.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Job Management</text>
</g>
<!-- manufacturingmanagement -->
<g id="node22" class="node">
<title>manufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3279.28,-1128 2848.72,-1128 2848.72,-948 3279.28,-948 3279.28,-1128"/>
<text text-anchor="start" x="2864.77" y="-1028.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Manufacturing Management</text>
</g>
<!-- qualityassurance -->
<g id="node23" class="node">
<title>qualityassurance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3709.02,-1128 3388.98,-1128 3388.98,-948 3709.02,-948 3709.02,-1128"/>
<text text-anchor="start" x="3419.16" y="-1028.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Quality Assurance</text>
</g>
<!-- rawmaterialmanagement -->
<g id="node24" class="node">
<title>rawmaterialmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2809.25,-828 2394.75,-828 2394.75,-648 2809.25,-648 2809.25,-828"/>
<text text-anchor="start" x="2410.8" y="-728.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Raw Material Management</text>
</g>
<!-- heavymanufacturingmanagement -->
<g id="node25" class="node">
<title>heavymanufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3449.08,-828 2918.92,-828 2918.92,-648 3449.08,-648 3449.08,-828"/>
<text text-anchor="start" x="2934.98" y="-728.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Heavy Manufacturing Management</text>
</g>
<!-- lightmanufacturingmanagement -->
<g id="node26" class="node">
<title>lightmanufacturingmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4068.42,-828 3559.58,-828 3559.58,-648 4068.42,-648 4068.42,-828"/>
<text text-anchor="start" x="3575.63" y="-728.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Light Manufacturing Management</text>
</g>
<!-- servicesmanagement -->
<g id="node27" class="node">
<title>servicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3491.24,-528 3140.76,-528 3140.76,-348 3491.24,-348 3491.24,-528"/>
<text text-anchor="start" x="3156.81" y="-428.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Services Management</text>
</g>
<!-- printservicesmanagement -->
<g id="node28" class="node">
<title>printservicesmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4026.59,-528 3601.41,-528 3601.41,-348 4026.59,-348 4026.59,-528"/>
<text text-anchor="start" x="3617.47" y="-428.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Print Services Management</text>
</g>
<!-- catalogmanagement -->
<g id="node29" class="node">
<title>catalogmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4475.04,-528 4136.96,-528 4136.96,-348 4475.04,-348 4475.04,-528"/>
<text text-anchor="start" x="4153.02" y="-428.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Catalog Management</text>
</g>
<!-- productlinemanagement -->
<g id="node30" class="node">
<title>productlinemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3548.73,-228 3141.27,-228 3141.27,-48 3548.73,-48 3548.73,-228"/>
<text text-anchor="start" x="3157.33" y="-128.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Product Line Management</text>
</g>
<!-- productinformationmanagement -->
<g id="node31" class="node">
<title>productinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4474.52,-228 3967.48,-228 3967.48,-48 4474.52,-48 4474.52,-228"/>
<text text-anchor="start" x="3983.54" y="-128.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Product Information Management</text>
</g>
<!-- brandmanagement -->
<g id="node32" class="node">
<title>brandmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4160.02,-2928 3839.98,-2928 3839.98,-2748 4160.02,-2748 4160.02,-2928"/>
<text text-anchor="start" x="3859.47" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Brand Management</text>
</g>
<!-- campaignmanagement -->
<g id="node33" class="node">
<title>campaignmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4186.82,-2628 3813.18,-2628 3813.18,-2448 4186.82,-2448 4186.82,-2628"/>
<text text-anchor="start" x="3829.23" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Campaign Management</text>
</g>
<!-- assetinformationmanagement -->
<g id="node34" class="node">
<title>assetinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3730.39,-2328 3253.61,-2328 3253.61,-2148 3730.39,-2148 3730.39,-2328"/>
<text text-anchor="start" x="3269.66" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Asset Information Management</text>
</g>
<!-- fleetmanagement -->
<g id="node35" class="node">
<title>fleetmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4160.02,-2328 3839.98,-2328 3839.98,-2148 4160.02,-2148 4160.02,-2328"/>
<text text-anchor="start" x="3866.59" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Fleet Management</text>
</g>
<!-- propertymanagement -->
<g id="node36" class="node">
<title>propertymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3666.36,-2028 3317.64,-2028 3317.64,-1848 3666.36,-1848 3666.36,-2028"/>
<text text-anchor="start" x="3333.7" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Property Management</text>
</g>
<!-- organizationalcommunicationmanagement -->
<g id="node37" class="node">
<title>organizationalcommunicationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4717.83,-2028 4248.17,-2028 4248.17,-1848 4717.83,-1848 4717.83,-2028"/>
<text text-anchor="start" x="4264.23" y="-1947.6" font-family="Arial" font-size="32.00" fill="#eff6ff">Organizational Communication</text>
<text text-anchor="start" x="4389.61" y="-1909.2" font-family="Arial" font-size="32.00" fill="#eff6ff">Management</text>
</g>
<!-- externalcommunicationmanagement -->
<g id="node38" class="node">
<title>externalcommunicationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5404.19,-2028 4827.81,-2028 4827.81,-1848 5404.19,-1848 5404.19,-2028"/>
<text text-anchor="start" x="4843.87" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">External Communication Management</text>
</g>
<!-- publicrelations -->
<g id="node39" class="node">
<title>publicrelations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4643.02,-1728 4322.98,-1728 4322.98,-1548 4643.02,-1548 4643.02,-1728"/>
<text text-anchor="start" x="4368.27" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Public Relations</text>
</g>
<!-- itsecurityandriskmanagement -->
<g id="node40" class="node">
<title>itsecurityandriskmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6555.05,-2928 6040.95,-2928 6040.95,-2748 6555.05,-2748 6555.05,-2928"/>
<text text-anchor="start" x="6057.01" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">IT Security and Risk Management</text>
</g>
<!-- physicalsecuritymanagement -->
<g id="node41" class="node">
<title>physicalsecuritymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6533.71,-2628 6062.29,-2628 6062.29,-2448 6533.71,-2448 6533.71,-2628"/>
<text text-anchor="start" x="6078.34" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Physical Security Management</text>
</g>
<!-- devicesandsystemsmanagement -->
<g id="node42" class="node">
<title>devicesandsystemsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6027.73,-2328 5492.27,-2328 5492.27,-2148 6027.73,-2148 6027.73,-2328"/>
<text text-anchor="start" x="5508.33" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Devices and Systems Management</text>
</g>
<!-- itarchitecture -->
<g id="node43" class="node">
<title>itarchitecture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6458.02,-2328 6137.98,-2328 6137.98,-2148 6458.02,-2148 6458.02,-2328"/>
<text text-anchor="start" x="6193.97" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">IT Architecture</text>
</g>
<!-- itsupportmanagement -->
<g id="node44" class="node">
<title>itsupportmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6945.6,-2328 6568.4,-2328 6568.4,-2148 6945.6,-2148 6945.6,-2328"/>
<text text-anchor="start" x="6584.46" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">IT Support Management</text>
</g>
<!-- itportfoliomanagement -->
<g id="node45" class="node">
<title>itportfoliomanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5951.25,-2028 5568.75,-2028 5568.75,-1848 5951.25,-1848 5951.25,-2028"/>
<text text-anchor="start" x="5584.8" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">IT Portfolio Management</text>
</g>
<!-- softwaredeliverymanagement -->
<g id="node46" class="node">
<title>softwaredeliverymanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6743.27,-2028 6264.73,-2028 6264.73,-1848 6743.27,-1848 6743.27,-2028"/>
<text text-anchor="start" x="6280.79" y="-1928.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Software Delivery Management</text>
</g>
<!-- employeedevelopment -->
<g id="node47" class="node">
<title>employeedevelopment</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6221.92,-1728 5850.08,-1728 5850.08,-1548 6221.92,-1548 6221.92,-1728"/>
<text text-anchor="start" x="5866.13" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Employee Development</text>
</g>
<!-- benefitsmanagement -->
<g id="node48" class="node">
<title>benefitsmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6675.7,-1728 6332.3,-1728 6332.3,-1548 6675.7,-1548 6675.7,-1728"/>
<text text-anchor="start" x="6348.35" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Benefits Management</text>
</g>
<!-- payrollmanagement -->
<g id="node49" class="node">
<title>payrollmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7111.8,-1728 6786.2,-1728 6786.2,-1548 7111.8,-1548 7111.8,-1728"/>
<text text-anchor="start" x="6802.26" y="-1628.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Payroll Management</text>
</g>
<!-- employeeinformationmanagement -->
<g id="node50" class="node">
<title>employeeinformationmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6389.52,-1428 5850.48,-1428 5850.48,-1248 6389.52,-1248 6389.52,-1428"/>
<text text-anchor="start" x="5866.53" y="-1328.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Employee Information Management</text>
</g>
<!-- hiringmanagement -->
<g id="node51" class="node">
<title>hiringmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7109.02,-1428 6788.98,-1428 6788.98,-1248 7109.02,-1248 7109.02,-1428"/>
<text text-anchor="start" x="6809.38" y="-1328.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Hiring Management</text>
</g>
<!-- legal -->
<g id="node52" class="node">
<title>legal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7375.02,-2928 7054.98,-2928 7054.98,-2748 7375.02,-2748 7375.02,-2928"/>
<text text-anchor="start" x="7175.85" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Legal</text>
</g>
<!-- corporateplanning -->
<g id="node53" class="node">
<title>corporateplanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7805.02,-2928 7484.98,-2928 7484.98,-2748 7805.02,-2748 7805.02,-2928"/>
<text text-anchor="start" x="7507.13" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Corporate Planning</text>
</g>
<!-- orgstructuremanagement -->
<g id="node54" class="node">
<title>orgstructuremanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8334.92,-2928 7915.08,-2928 7915.08,-2748 8334.92,-2748 8334.92,-2928"/>
<text text-anchor="start" x="7931.13" y="-2828.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Org Structure Management</text>
</g>
<!-- eventmanagement -->
<g id="node55" class="node">
<title>eventmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7375.02,-2628 7054.98,-2628 7054.98,-2448 7375.02,-2448 7375.02,-2628"/>
<text text-anchor="start" x="7071.8" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Event &#160;Management</text>
</g>
<!-- travelmanagement -->
<g id="node56" class="node">
<title>travelmanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7805.02,-2628 7484.98,-2628 7484.98,-2448 7805.02,-2448 7805.02,-2628"/>
<text text-anchor="start" x="7502.71" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Travel Management</text>
</g>
<!-- enterprisechangemanagement -->
<g id="node57" class="node">
<title>enterprisechangemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8409.31,-2628 7914.69,-2628 7914.69,-2448 8409.31,-2448 8409.31,-2628"/>
<text text-anchor="start" x="7930.75" y="-2528.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Enterprise Change Management</text>
</g>
<!-- corporategovernancemanagement -->
<g id="node58" class="node">
<title>corporategovernancemanagement</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7608.65,-2328 7055.35,-2328 7055.35,-2148 7608.65,-2148 7608.65,-2328"/>
<text text-anchor="start" x="7071.41" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Corporate Governance Management</text>
</g>
<!-- strategymanagement2 -->
<g id="node59" class="node">
<title>strategymanagement2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8237.48,-2328 7890.52,-2328 7890.52,-2148 8237.48,-2148 8237.48,-2328"/>
<text text-anchor="start" x="7906.58" y="-2228.4" font-family="Arial" font-size="32.00" fill="#eff6ff">Strategy Management</text>
</g>
<!-- inventorymanagement&#45;&gt;sourcingmanagement -->
<!-- warehousingmanagement&#45;&gt;transportationand3rdpartylogisticsmanagement -->
<!-- transportationand3rdpartylogisticsmanagement&#45;&gt;supplychainplanning -->
<!-- sourcingmanagement&#45;&gt;supplychaingovernanceandriskmanagement -->
<!-- supplychainplanning&#45;&gt;procurement -->
<!-- suppliermanagement&#45;&gt;customermanagement -->
<!-- customermanagement&#45;&gt;salesinformationmanagement -->
<!-- saleschannelmanagement&#45;&gt;salesordermanagement -->
<!-- salesinformationmanagement&#45;&gt;crosschannelmanagement -->
<!-- pricingmanagement&#45;&gt;accountsreceivablemanagement -->
<!-- accountspayablemanagement&#45;&gt;equitymanagement -->
<!-- accountsreceivablemanagement&#45;&gt;taxmanagement -->
<!-- taxmanagement&#45;&gt;expensemanagement -->
<!-- treasuryandcashmanagement&#45;&gt;manufacturingmanagement -->
<!-- jobmanagement&#45;&gt;rawmaterialmanagement -->
<!-- manufacturingmanagement&#45;&gt;qualityassurance -->
<!-- qualityassurance&#45;&gt;heavymanufacturingmanagement -->
<!-- lightmanufacturingmanagement&#45;&gt;printservicesmanagement -->
<!-- servicesmanagement&#45;&gt;productlinemanagement -->
<!-- printservicesmanagement&#45;&gt;catalogmanagement -->
<!-- catalogmanagement&#45;&gt;productinformationmanagement -->
<!-- brandmanagement&#45;&gt;campaignmanagement -->
<!-- campaignmanagement&#45;&gt;fleetmanagement -->
<!-- assetinformationmanagement&#45;&gt;propertymanagement -->
<!-- fleetmanagement&#45;&gt;externalcommunicationmanagement -->
<!-- organizationalcommunicationmanagement&#45;&gt;publicrelations -->
<!-- itsecurityandriskmanagement&#45;&gt;physicalsecuritymanagement -->
<!-- physicalsecuritymanagement&#45;&gt;itarchitecture -->
<!-- devicesandsystemsmanagement&#45;&gt;itportfoliomanagement -->
<!-- itarchitecture&#45;&gt;itsupportmanagement -->
<!-- softwaredeliverymanagement&#45;&gt;benefitsmanagement -->
<!-- employeedevelopment&#45;&gt;employeeinformationmanagement -->
<!-- benefitsmanagement&#45;&gt;payrollmanagement -->
<!-- payrollmanagement&#45;&gt;hiringmanagement -->
<!-- legal&#45;&gt;eventmanagement -->
<!-- corporateplanning&#45;&gt;orgstructuremanagement -->
<!-- orgstructuremanagement&#45;&gt;travelmanagement -->
<!-- eventmanagement&#45;&gt;corporategovernancemanagement -->
<!-- travelmanagement&#45;&gt;enterprisechangemanagement -->
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+n)}}export{e as dotSource,t as svgSource};
