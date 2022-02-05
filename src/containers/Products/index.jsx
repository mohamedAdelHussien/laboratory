import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { notification ,Tag} from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaCity, FaShoppingCart ,FaThList} from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import config,{listType,productType} from "./config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";
import  moment from "moment-hijri";

const Countries = () => {
  const [fetcher, setFetcher] = useState(0);

  const token = useSelector((state) => state.Auth.idToken);

  const deleteRecord = ({ id }) => {
    toast.promise(
      axios[config.api.delete?.[0]?.method](`${config.api.delete?.[1]}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      {
        pending: "Pending",
        success: {
          render(res) {
            setFetcher((fetcher) => !fetcher);
            console.log(res.data);
            return `👌 ${res.data.data.message}`;
          },
          // other options
          icon: "🟢",
        },
        error: {
          render(err) {
            return `🤯 ${
              err?.data?.response?.data?.message || "Backend Error Occured"
            }`;
          },
          // other options
          //    icon: "🟢",
        },
      }
    );
  };
  // const actions = [
  //   {
  //     title: "Actions",
  //     dataIndex: "id",
  //     key: "id",
  //     render: (text, record, index) => (
  //       <div style={{ color: "#646D82", cursor: "pointer" }} className="d-flex">
  //       </div>
  //     ),
  //   },
  // ];

  const filters = [
    {
      uniq: "q",
      type: "search",
      icon: <SearchOutlined />,
      placeholder: ["بحث", "Search ..."],
      key: "q",
      online: {
        status: true,
        url: "url",
        params: "",
      },
      hide: {
        onValue: "new",
        hiddenFilters: ["city_id", "fromTO"],
      },
    },

    // {
    //   uniq: "country_id",
    //   type: "select",
    //   icon: <FaGlobe />,
    //   placeholder: ["البلد", "Country"],
    //   key: "country_id",
    //   data: {
    //     isOnline: true,
    //     url: "countries",
    //     params: {},
    //     options: [{ id: null, ["name_en"]: "All" }],
    //     optionName: "name_en",
    //   },
    // },
    // {
    //   uniq: "city_id",
    //   type: "select",
    //   icon: <FaCity />,
    //   placeholder: ["المدينة", "City"],
    //   key: "city_id",
    //   data: {
    //     isOnline: true,
    //     url: "cities",
    //     params: {},
    //     options: [{ id: null, ["name_en"]: "All" }],
    //     optionName: "name_en",
    //   },
    // },
    {
            uniq: "product_type",
    icon: <FaShoppingCart />,
      type: "select",
      placeholder: ["product type", "product type"],
      key: "product_type",
      data: {
        isOnline: false,
      //  url: "cities",
     //   params: {},
        options: [
          { id: null, ["name_en"]: "All" },
          { id: 1, ["name_en"]:productType['1']},
          { id: 2, ["name_en"]: productType['2']},
          { id: 3, ["name_en"]: productType['3'] },
      
      
      ],
        optionName: "name_en",
      },
    },

    {
      uniq: "list_type",
      icon: <FaThList />,

type: "select",
placeholder: ["list type", "list type"],
key: "list_type",
data: {
  isOnline: false,
//  url: "cities",
//   params: {},
  options: [
    { id: null, ["name_en"]: "All" },
    { id: 1, ["name_en"]:listType['1']},
    { id: 2, ["name_en"]: listType['2']},
    { id: 3, ["name_en"]: listType['3'] },


],
  optionName: "name_en",
},
},



    // {
    //   uniq: "fromTO",
    //   type: "dateFromTo",
    //   icon: <MdDateRange />,
    //   placeholder: {
    //     ar: ["تاريخ البدء", " تاريخ الانتهاء"],
    //     en: ["start date", "end date"],
    //   },
    //   key: ["from", "to"],
    //   data: {
    //     isOnline: false,
    //   },
    // },
  ];

  return (
    <>
      <IndexMain
        //call index request
        fetcher={fetcher}
        // index url
        indexRequest={config.api.index}
        // Breadcrumb
        Breadcrumb={{
          type: "SET",
          payload: [
            {
              key: config.routes.indexKey,
              to: config.routes.index,
              title: config.routes.indexTitle,
            },
          ],
        }}
        // head table content
        addRowURL={getPermissions(config.permissionName, "create")?config.routes.add:false}
        // head filters table
        filters={filters}
        // columns table content
        editRowURL={getPermissions(config.permissionName, "update")?config.routes.edit:false}
        //   showRowURL={config.routes.show}
        deleteRow={{ status: getPermissions(config.permissionName, "delete"), deleteRecord }}
        action={(getPermissions(config.permissionName, "delete")||getPermissions(config.permissionName, "update"))||false}

        generalCols={generateCols(["content_en",
         "content_ar",
         {
key:'product_type',
content:(text)=><div>{productType[text]}</div>
         },
         {
          key:'list_type',
          content:(text)=><div>{listType[text]}</div>
                   },        {
                    key: "created_at",
        
                    content: (text, record) =>
                    <div style={{display:"flex", flexDirection:"column",gap:5}}>
                    <Tag color="cyan">{ moment(text).format('iYYYY-iM-iD')} H</Tag>  
                   <Tag color="blue">{moment(text).format('YYYY-M-D')} G </Tag>
                   </div>
                  } ])}
        options={[]}
        // add table props here
      />
    </>
  );

};
export default Countries;