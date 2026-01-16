import React, { useEffect, useState } from "react";
import ViewMessage from "@/common/ViewMessage";
import Listing from "@/pages/api/Listing";
import NoData from "@/common/NoDataFound";
import { TableLoader } from "@/common/LoadingSpinner";
import AuthLayout from "@/layout/AuthLayout";
import Loader from "@/common/Loader";

export default function index() {
  const [listing, setLisitng] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const EnquiryList = async (pg, signal) => {
    try {
      if (pg === 1) {
        setLoading(true);
      }
      setLoadingButton(true);

      const main = new Listing();
      const response = await main.enquiryGet(pg, limit, { signal });

      const records = response?.data?.data?.records;
      const pagination = response?.data?.data?.pagination;

      if (records) {
        setLisitng((prevData) => {
          if (pg === 1) {
            return records;
          } else {
            return [...prevData, ...records];
          }
        });

        setHasMore(pagination?.nextPage !== null);
      }
    } catch (error) {
      console.log("Error fetching enquiry data:", error);
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
        ) : // <Loader/>
        listing?.length === 0 ? (
          <NoData />
        ) : (
          <>
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
                  Subject
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
                    {item?.subject}
                  </td>
                  <td className=" font-[600] text-white text-[16px] text-left px-[10px] py-[16px]  border-b border-[#ffffff1a] text-left   ">
                    <ViewMessage text={item.message} />
                  </td>
                </tr>
              ))}
          </table>
          {hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            disabled={loadingButton}
            className="px-6 py-2 bg-theme text-white rounded-lg disabled:opacity-50 cursor-pointer"
          >
            {loadingButton ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      </>
        )}
      </div>
    </AuthLayout>
  );
}
