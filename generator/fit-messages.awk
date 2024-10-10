#!/bin/awk

BEGIN {
	FS=","
	first = 1

  printf "import { Field } from './fitTypes'\n";
  printf "import FitConstants from './fitConstants'\n";
  printf "import { ValueType } from './fitConstants'\n\n";
	printf "export default class FitMessages {\n"
}

FNR==1 {next}

$1 !~ /^$/ {
	if (first == 0) {
		printf "\t};\n\n"
	}
  if ($1 == "length") {
	  printf "\tstatic _%s = {\n", $1
  } else {
	  printf "\tstatic %s = {\n", $1
  }
	first = 0
}
$1 ~ /^$/ && $2 !~ /^$/ && $4 ~ /^(enum|sint8|uint8|sint16|uint16|sint32|uint32|string|float32|float64|uint8z|uint16z|uint32z|byte|sint64|uint64|uint64z)$/ {
	printf "\t\t\"%s\": new Field(%d, ValueType.%s),\n", $3, $2, $4
}
$1 ~ /^$/ && $2 !~ /^$/ && $4 ~ /^(localtime_into_day)$/ {
	printf "\t\t\"%s\": new Field(%d, FitConstants.constant_types.%s),\n", $3, $2, $4
}
$1 ~ /^$/ && $2 !~ /^$/ && $4 !~ /^(enum|sint8|uint8|sint16|uint16|sint32|uint32|string|float32|float64|uint8z|uint16z|uint32z|byte|sint64|uint64|uint64z|localtime_into_day)$/ {
	printf "\t\t\"%s\": new Field(%d, FitConstants.%s),\n", $3, $2, $4
}

END {
	printf "\t};\n}\n\n"
}

