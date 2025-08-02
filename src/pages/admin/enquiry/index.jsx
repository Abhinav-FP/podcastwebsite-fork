import React, { useEffect, useState } from "react";
import moment from "moment";
import ViewMessage from "@/common/ViewMessage";
import Listing from "@/pages/api/Listing";
import NoData from "@/common/NoDataFound";
import LoadingSpinner, { TableLoader } from "@/common/LoadingSpinner";
import AuthLayout from "@/layout/AuthLayout";

export default function index() {
  const [listing, setLisitng] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [hasMore, setHasMore] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const EnquiryList = async (pg, signal) => {
    try {
      if (pg === 1) {
        setLoading(true);
      }
      setLoadingButton(true);
      const main = new Listing();
      const response = await main.enquiryGet(page, limit, { signal });
      // console.log("response", response)
      if (response?.data?.data) {
        setLisitng((prevData) => {
          if (page === 1) {
            return response.data.data;
          } else {
            return [...prevData, ...response.data.data];
          }
        });
        setHasMore(response.data.data.nextPage !== null);
        setLoading(false);
        setLoadingButton(false);
      }
    } catch (error) {
      console.error("Error fetching package data:", error);
    } finally {
      setLoading(false);
      setLoadingButton(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    EnquiryList(page, signal);
    return () => controller.abort();
  }, [page, limit]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Enquiries</h1>
      </div>
      <div className="overflow-auto">
        {loading ? (
          <TableLoader length={4} />
        ) : listing?.length === 0 ? (
          <NoData />
        ) : (
          <table className="w-full table-auto whitespace-nowrap">
            <thead>
              <tr className="bg-theme">
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] mb-[10px]">
                  S.No.
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left p-[10px] ">
                  Name{" "}
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Email
                </th>
                <th className="border-b border-[#ffffff]  text-[14px] text-[#ffffff] uppercase text-left   p-[10px]">
                  Message
                </th>
              </tr>
            </thead>
            {listing &&
              listing?.map((item, index) => (
                <tr key={index}>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a]">
                    {index + 1}
                  </td>
                  <td className="font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left  ">
                    {item?.name}
                  </td>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    {item?.email}
                  </td>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    <ViewMessage text={item.message} />
                  </td>
                </tr>
              ))}
          </table>
        )}
      </div>
      {/* <div className="mt-[10px]  lg:mt-[10px] lg:mb-[20px] flex justify-center items-center">
        {
          listing?.length > 0 && !loading && hasMore && (
            <div className="mt-[10px]  lg:mt-[10px] lg:mb-[20px] flex justify-center items-center">
              <button
                onClick={loadMore}
                className="px-[20px] py-[15px] lg:px-[20px] lg:py-[15px] button-bg text-white  font-[700] text-[15px] rounded-md hover:bg-[#938539] transition duration-300">
                {loadingButton ? "Loading..." : "Load More"}

              </button>
            </div>
          )
        }
      </div> */}
    </AuthLayout>
  );
}
