import { Dropdown, Flowbite, Spinner, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import type { PaginatedUrlResponseType } from "../../types";
import { Pagination } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../services/store/store";
import { deleteUrl, getUrls } from "../../services/slices/knowledge_base/urls";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { RiDeleteBin5Line } from "react-icons/ri";

function ViewUrls() {
  const allUrls = useSelector((state: RootState) => state.url?.getData);
  const loading = useSelector((state: RootState) => state.url?.loading);

  const dispatch = useDispatch();

  const onPageChange = (page: number) => {
    dispatch(getUrls({ page: page }));
  };

  useEffect(() => {
    if (!allUrls) {
      console.debug(
        "ℹ️ ~ file: knowledgeBase.tsx:25 ~ useEffect ~ allUrls:",
        allUrls
      );
      dispatch(getUrls({ page: 1 }));
    }
  }, [dispatch, allUrls]);
  const handleDelete = (id: string): void => {
    dispatch(deleteUrl(id))
      .then((result: any) => {
        if (result.payload.success) {
          alert("Url deleted successfully.");
        } else {
          alert(`Failed to delete url: ${result.payload.error}`);
        }
      })
      .catch(error => {
        alert("An unexpected error occurred. Please try again later.");
        console.error("Delete url error:", error);
      });
  };
  return (
    <div className="pt-8 px-5">
      <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/folder.png"
            width={16}
            height={16}
            className="w-9 h-9"
          />
          <p className="text-xl">Youtube Knowledge</p>
        </div>
        <p className="text-xs text-lightgray4 pt-2px">
          {allUrls ? allUrls.total : 0} files
        </p>
      </div>
      <div className="overflow-auto">
        {loading ? (
          <div className="flex justify-center my-12">
            <Spinner />
          </div>
        ) : allUrls?.data?.length ? (
          <>
            <Table className="relative z-10">
              <Table.Body className="">
                {/* Recent Urls  */}

                {allUrls?.data?.map((item, index) => (
                  <Table.Row
                    className="text-darkgray2 border-b fw-medium"
                    key={index}
                  >
                    <Table.Cell
                      className={`"py-4 border-b pl-3" ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <div className="flex gap-2 items-center min-w-[150px]">
                        <YouTubeIcon />

                        <a
                          href={item.url}
                          className="text-darkgray2 text-sm font-semibold"
                        >
                          {item.title}
                        </a>
                      </div>
                    </Table.Cell>

                    <Table.Cell
                      className={`"py-4 border-b " ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <p className="text-lightgray4 text-sm font-normal min-w-[148px]">
                        {new Date(item.created_at).toLocaleDateString()}
                      </p>
                    </Table.Cell>
                    <Table.Cell
                      className={`"py-4 border-b pl-3" ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    ></Table.Cell>

                    <Table.Cell
                      className={`"py-4 border-b pl-3" ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <div className="flex gap-2 md:gap-4 items-center justify-end">
                        <a
                          href={item.url}
                          className="text-sm py-1 px-2 border border-gray-300 bg-white text-gray-600 rounded-lg"
                        >
                          View
                        </a>

                        <RiDeleteBin5Line
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          stroke="red-code"
                          className="text-red-code cursor-pointer"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}

                {/* </Table.Row> */}
              </Table.Body>
            </Table>
            <div className="flex justify-center mt-3">
              <Pagination
                currentPage={allUrls?.page || 1}
                totalPages={allUrls?.total_pages || 1}
                onPageChange={onPageChange}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-center my-12">
            <p className="text-center text-gray-500">No URLs Available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewUrls;
