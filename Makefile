SHELL := /bin/bash

ARCHIVE_FILENAME := aqa_website.tar.gz

export:
	npx next build
	npx next export
	cd out && \
		tar --create --verbose --gzip --recursion --file=$(ARCHIVE_FILENAME) *

deploy: export
	scp out/$(ARCHIVE_FILENAME) root@aqatl.pl:/var/www/aqawebsite/
	ssh root@aqatl.pl \
		"cd /var/www/aqawebsite && \
			tar --extract --verbose --ungzip --file $(ARCHIVE_FILENAME) && \
			rm $(ARCHIVE_FILENAME)"

run:
	npx next dev