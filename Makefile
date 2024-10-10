AWK = awk
AWK_FLAGS = $ -f

TEST_DIR = test
GEN_DIR = generator
SRC_DIR = src
FITSDK_PROFILE = $(TEST_DIR)/Profile.xlsx
GEN_AWK = $(wildcard $(GEN_DIR)/*.awk)
GEN_CSV = $(TEST_DIR)/%.csv

TARGET = $(patsubst $(GEN_DIR)/%.awk, $(SRC_DIR)/%.ts, $(GEN_AWK))

run: clean default

clean:
	rm -f $(SRC_DIR)/fit-*
	rm -f $(TEST_DIR)/fit-*

default: $(TARGET)

$(TARGET): $(SRC_DIR)/%.ts: $(GEN_DIR)/%.awk $(GEN_CSV)
	$(AWK) $(AWK_FLAGS) $? > $@

$(GEN_CSV): $(FITSDK_PROFILE)
	libreoffice --headless --convert-to \
		csv:"Text - txt - csv (StarCalc)":44,34,UTF8,1,,0,false,true,false,false,false,-1 \
		$< --outdir $(TEST_DIR)
	mv $(TEST_DIR)/Profile-Messages.csv $(TEST_DIR)/fit-messages.csv
	mv $(TEST_DIR)/Profile-Types.csv $(TEST_DIR)/fit-types.csv

