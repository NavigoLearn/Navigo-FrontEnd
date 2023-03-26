@echo off
setlocal

if "%1"=="--C" (
    set MESSAGE= "(create)[%date%] %~2" 
) else if "%1"=="--F" (
    set MESSAGE="(fix)[%date%]  %~2" 
) else if "%1"=="--R" (
    set MESSAGE="(refactor)[%date%] %~2"
) else if "%1"=="--D" (
    set MESSAGE="(delete)[%date%]  %~2" 
) else (
    echo Invalid option: %1
    echo Usage: gitC [--C|--F|--R|--D] message
    goto end
)

git commit -m %MESSAGE%

:end
endlocal
