cmake_minimum_required(VERSION 3.0)

project(cmake_swap)

include_directories(${CMAKE_SOURCE_DIR}/include)

add_executable(main main.cpp swap.cpp)