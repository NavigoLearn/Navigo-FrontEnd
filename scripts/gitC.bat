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
) else if "%1"=="--M" (
    set MESSAGE="(merge)[%date%]  %~2" 
) else if "%1"=="--P" (
    set MESSAGE="(progress)[%date%]  %~2" 
) else (
 
    echo "Usage: gitC [--(C)reate|--(F)ix|--(R)refactor|--(D)elete|--(M)erge|--(P)rogess] message"
    goto end
)

git commit -m %MESSAGE%

:end
endlocal
