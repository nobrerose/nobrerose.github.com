num=0; for i in *; do mv "$i" "$(printf $num).${i#*.}"; ((num++)); done
