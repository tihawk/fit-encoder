#!/bin/awk

BEGIN {
	FS=","
	PROCINFO["sorted_in"] = "@ind_str_asc"

  printf "import * as t from './fitConstantsTypes'\n\n";
  printf "export const ValueType: t.ValueTypeT = {\n";
  printf "\tenum: 0x00,\n";
  printf "\tsint8: 0x01,\n";
  printf "\tuint8: 0x02,\n";
  printf "\tsint16: 0x83,\n";
  printf "\tuint16: 0x84,\n";
  printf "\tsint32: 0x85,\n";
  printf "\tuint32: 0x86,\n";
  printf "\tstring: 0x07,\n";
  printf "\tfloat32: 0x88,\n";
  printf "\tfloat64: 0x89,\n";
  printf "\tuint8z: 0x0A,\n";
  printf "\tuint16z: 0x8B,\n";
  printf "\tuint32z: 0x8C,\n";
  printf "\tbyte: 0x0D,\n";
  printf "\tsint64: 0x8E,\n";
  printf "\tuint64: 0x8F,\n";
  printf "\tuint64z: 0x90\n";
  printf "};\n\n";
  printf "export default class FitConstants {\n\n";
  printf "\t//NOTE: not sure what this is...\n"
  printf "\tstatic bool = true\n\n"

}

FNR==1 {next}

$1 !~ /^$/ { name=$1; types[name] = $2 }
$1 ~ /^$/  { kv[name,NR] = sprintf("\"%s\": %d", $3, $4) }

END {
	last=0
	for (combined in kv) {
		split(combined, separate, SUBSEP);
		if (separate[1] != last) {
			if (last != 0) {
				printf "\t};\n\n";
			}
			printf "\tstatic %s: t.%sT = {\n", separate[1], separate[1];
			printf "\t\t__name: \"%s\",\n", separate[1];
			last = separate[1];
		}

		printf "\t\t%s,\n", kv[separate[1], separate[2]];
	}

	printf("\t};\n\n");

	printf "\tstatic constant_types: t.constant_typesT = {\n";

	for (t in types) {
		printf "\t\t%s: ValueType.%s,\n", t, types[t];
	}

	printf "\t};\n\n};\n";
}
